# main.py
from action_distribution_analysis import ActionAnalysis
from data_processing import process_conversation
import json

def print_dataset():
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

def test_agreement_analysis():

    with open('cima_dataset.json', 'r') as f:
        data = json.load(f)
    
    # Process first 10 conversations for testing
    processed_turns = []
    for conv_id in list(data['prepDataset'].keys())[:10]:
        turns = process_conversation(data['prepDataset'][conv_id])
        processed_turns.extend(turns)
    
    # Run agreement analysis
    analyzer = ActionAnalysis()
    agreement_metrics = analyzer.compute_agreement_metrics(processed_turns)
    
    # Print results
    print("\nAgreement Metrics:")
    print(f"Overall agreement rate: {agreement_metrics['overall_agreement']:.3f}")
    print("\nPer-action agreement rates:")
    for action, rate in agreement_metrics['per_action_agreement'].items():
        print(f"{action}: {rate:.3f}")
    

if __name__ == "__main__":
    test_agreement_analysis()