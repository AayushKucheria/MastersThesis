from collections import Counter
from typing import List
import matplotlib.pyplot as plt
from data_processing import ProcessedConversation

def analyze_tutor_action_distribution(conversations: List[ProcessedConversation]):
    """
    Analyzes the distribution of tutor actions across all conversations.
    
    Each tutor response has 5 possible actions:
    [question, hint, correction, confirmation, other]
    """
    # Initialize counters for each action type
    action_counts = Counter()
    action_types = ['Question', 'Hint', 'Correction', 'Confirmation', 'Other']
    
    # Count occurrences of each action
    for conv in conversations:
        for tutor_response in conv.tutor_responses:
            for action_type, is_present in zip(action_types, tutor_response.actions):
                if is_present:
                    action_counts[action_type] += 1
    # Create bar plot
    plt.figure(figsize=(10, 6))
    actions = list(action_counts.keys())
    counts = list(action_counts.values())
    
    plt.bar(actions, counts)
    plt.title('Distribution of Tutor Actions Across All Conversations')
    plt.xlabel('Action Type')
    plt.ylabel('Number of Occurrences')
    plt.xticks(rotation=45)
    
    # Add count labels on top of each bar
    for i, count in enumerate(counts):
        plt.text(i, count, str(count), ha='center', va='bottom')
    
    plt.tight_layout()
    
    # Save plot as PNG
    plt.savefig('tutor_actions_distribution.png')
    plt.close()
    
    return action_counts

def analyze_conditional_action_distribution(conversations: List[ProcessedConversation]):
    """
    Analyzes the distribution of tutor actions conditioned on student actions.
    """

    student_action_types = ['Guess', 'Question', 'Affirmation', 'Other']
    tutor_action_types = ['Question', 'Hint', 'Correction', 'Confirmation', 'Other']

    def create_conditional_counts(student_actions, tutor_actions):
        return {
            student: {tutor: 0 for tutor in tutor_actions}
            for student in student_actions
        }
    
    conditional_counts = create_conditional_counts(student_action_types, tutor_action_types)
    
    # Count occurrences of each tutor action given student action
    for conv in conversations:
        for student_action_type, is_student_action in zip(student_action_types, conv.student_actions):
            is_student_action = is_student_action.lower() == "true"
            if bool(is_student_action):
                # For this student action, count all tutor actions that followed
                for tutor_response in conv.tutor_responses:
                    for tutor_action_type, is_tutor_action in zip(tutor_action_types, tutor_response.actions):
                        if is_tutor_action:
                            conditional_counts[student_action_type][tutor_action_type] += 1

    # Normalize counts to 0-1 range for each student action type
    for student_action in student_action_types:
        total = sum(conditional_counts[student_action].values())
        if total > 0:  # Avoid division by zero
            for tutor_action in tutor_action_types:
                conditional_counts[student_action][tutor_action] /= total

    # Print conditional distribution
    print("\nConditional Distribution of Tutor Actions Given Student Actions:")
    print("-" * 80)
    
    # Print header row with tutor action types
    header = "Student Action".ljust(15) + " | "
    header += " | ".join(f"{action:^10}" for action in tutor_action_types)
    print(header)
    print("-" * 80)
    
    # Print each row of counts
    for student_action in student_action_types:
        row = student_action.ljust(15) + " | "
        row += " | ".join(f"{conditional_counts[student_action][tutor_action]:^10.2f}" 
                         for tutor_action in tutor_action_types)
        print(row)
    print("-" * 80 + "\n")
    
    # Create grouped bar plot
    plt.figure(figsize=(12, 6))
    bar_width = 0.15
    index = range(len(student_action_types))
    
    # Plot bars for each tutor action type
    for i, tutor_action in enumerate(tutor_action_types):
        counts = [conditional_counts[student_action][tutor_action] for student_action in student_action_types]
        position = [x + (i * bar_width) for x in index]
        bars = plt.bar(position, counts, bar_width, label=tutor_action)
        
        # Add count labels on top of each bar
        for bar in bars:
            height = bar.get_height()
            plt.text(bar.get_x() + bar.get_width()/2., height,
                    f"{height:.2f}", ha='center', va='bottom')
    
    plt.title('Distribution of Tutor Actions Conditioned on Student Actions')
    plt.xlabel('Student Action Type')
    plt.ylabel('Proportion of Tutor Actions')
    plt.xticks([x + bar_width * 2 for x in index], student_action_types, rotation=45)
    plt.legend()
    
    plt.tight_layout()
    plt.savefig('conditional_actions_distribution.png')
    plt.close()
    return conditional_counts

