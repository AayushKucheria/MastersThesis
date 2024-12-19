# main.py
from action_distribution_analysis import ActionAnalysis
from data_processing import process_conversation
import json

from analysis import analyze_conditional_action_distribution, analyze_tutor_action_distribution

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
        break
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

def generate_ai_responses(processed_conversations):
    return

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
    print_conversation_details(processed_conversations[:2])

    # processed_conversations = generate_ai_responses(processed_conversations)
    # action_dist, cond_dist = analyze_distributions(processed_conversations)

if __name__ == "__main__":
    run_analysis()
    