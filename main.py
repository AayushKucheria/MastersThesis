# main.py
from data_processing import process_conversation
import json

def main():
    with open('cima_dataset.json', 'r') as f:
        data = json.load(f)
    
    # Take first conversation
    first_conv = data['prepDataset']['2']
    processed_turns = process_conversation(first_conv)
    turn = processed_turns[0]
    
    print(f"Turn {turn.turn_index}:")
    print("\nExchange:")
    print(f"Tutor prompt: {turn.tutor_prompt}")
    print(f"Student response: {turn.student_response}")
    
    print("\nStudent actions: [guess, question, affirmation, other]")
    print(turn.student_actions)
    
    print("\nTarget translations:")
    for k, v in turn.target.items():
        print(f"  {k}: {v}")
    
    print("\nGrammar rules:")
    for rule in turn.grammar_rules:
        print(f"  - {rule}")
    
    print("\nTutor responses & actions [question, hint, correction, confirmation, other]:")
    for i, tr in enumerate(turn.tutor_responses, 1):
        print(f"\nResponse {i}: {tr.response}")
        print(f"Actions:   {tr.actions}")

if __name__ == "__main__":
    main()