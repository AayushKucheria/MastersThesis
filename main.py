# main.py
from action_distribution_analysis import ActionAnalysis
from data_processing import process_conversation
import json
from dotenv import load_dotenv
import os

from analysis import analyze_conditional_action_distribution, analyze_tutor_action_distribution
from llm_responses import LLMTutor

def load_dataset():
    """Load and return the CIMA dataset"""
    with open('cima_dataset.json', 'r') as f:
        data = json.load(f)
    return data

def process_all_conversations(data):
    """Process all conversations in the dataset"""
    processed_conversations = []
    for conv_id in list(data['prepDataset'].keys()):
        conversation = process_conversation(data['prepDataset'][conv_id])
        processed_conversations.append(conversation)
        
    return processed_conversations

def analyze_distributions(processed_conversations):
    """Analyze and print action distributions"""
    # Analyze human tutors actions
    action_distribution = analyze_tutor_action_distribution(processed_conversations)
    print("\nAction Distribution:")
    for action, count in action_distribution.items():
        print(f"{action}: {count}")

    conditional_distribution = analyze_conditional_action_distribution(processed_conversations)
    return action_distribution, conditional_distribution

def generate_ai_responses(processed_conversations, model_name):
    """Generate AI responses for each conversation using LLMTutor"""

    # Load existing AI responses if available
    ai_responses_file = f'{model_name}_responses.json'
    existing_responses = {}
    if os.path.exists(ai_responses_file):
        with open(ai_responses_file, 'r') as f:
            existing_responses = json.load(f)

    load_dotenv()
    api_key = os.getenv('API_KEY')
    if not api_key:
        raise ValueError("API_KEY not found in environment variables")
        
    llm_tutor = LLMTutor(api_key)
    
    
    new_responses = {}
    # Generate responses for each conversation
    for i, conversation in enumerate(processed_conversations):

        if i in existing_responses:
            print(f"Skipping conversation {i} - already processed")
            continue

        llm_response = llm_tutor.generate_response(conversation, model_name)
        new_responses[i] = {
            'response': llm_response.response,
            'actions': llm_response.actions
        }

         # Save after each generation to prevent loss
        all_responses = {**existing_responses, **new_responses}
        os.makedirs(os.path.dirname(ai_responses_file), exist_ok=True)
        with open(ai_responses_file, 'w') as f:
            json.dump(all_responses, f, indent=2)
            
        print(f"Processed conversation {i}")
    
    return processed_conversations

def print_conversation_details(conversations):
        """Pretty print details of processed conversations"""
        for i, conv in enumerate(conversations, 1):
            print(f"\nConversation {i}")
            print("=" * 50)
            
            # Print student actions
            print(f"\nStudent Actions: {conv.student_actions}")
            
            # Print tutor responses
            print("\nTutor Responses:")
            for j, tr in enumerate(conv.tutor_responses, 1):
                print(f"\n  Response {j}:")
                print(f"    Text: {tr.response}")
                action_types = ['Question', 'Hint', 'Correction', 'Confirmation', 'Other']
                print("    Actions:", end=" ")
                active_actions = [action for action, is_active in zip(action_types, tr.actions) if is_active]
                print(", ".join(active_actions) if active_actions else "None")
            
            # Print context information
            print("\nContext:")
            target_phrase = conv.context['target_phrase']
            print(f"  Target Phrase (IT): {target_phrase['it']}")
            print(f"  Target Phrase (EN): {target_phrase['en']}")
            
            print("\nGrammar Rules:")
            for rule in conv.context['grammar_rules']:
                print(f"  • {rule}")
            
            print("\nConversation History:")
            for j, msg in enumerate(conv.context['conversation_history'], 1):
                print(f"  {j}. {msg}")
            
            print("\n" + "=" * 50)

        
def run_analysis():
    """Main function to run the full analysis"""
    data = load_dataset()
    processed_conversations = process_all_conversations(data)

    # model_name = "google/gemini-pro-1.5"
    # model_name = "openai/gpt-4o-2024-08-06"
    model_name = "meta-llama/llama-3.1-405b-instruct:nitro"
    processed_conversations = generate_ai_responses(processed_conversations, model_name)
    # print_conversation_details(processed_conversations[:10])
    # action_dist, cond_dist = analyze_distributions(processed_conversations)

if __name__ == "__main__":
    run_analysis()
    