import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from typing import Dict, List
import json
import os

def load_json_data(file_path: str) -> Dict:
    """
    Load JSON data from file
    """
    with open(file_path, 'r') as f:
        return json.load(f)

def plot_action_distribution(data: Dict, title: str = "Action Type Distribution", output_dir: str = None):
    """
    Create bar chart showing relative frequencies of each action type for a single data source
    
    Args:
        data: Dictionary containing conversation data
        title: Title for the plot
        output_dir: Directory to save the plot in. If None, plot will only be displayed.
    """
    # Process actions into a format suitable for plotting
    action_counts = {}
    
    for conv_id, conv_data in data.items():
        # Handle both single response and ensemble (list) formats
        responses = conv_data if isinstance(conv_data, list) else [conv_data]
        
        for response in responses:
            for action in response['actions']:
                action_counts[action] = action_counts.get(action, 0) + 1
    
    # Convert to DataFrame and normalize
    total_count = sum(action_counts.values())
    df = pd.DataFrame([
        {'Action': action, 'Percentage': count/total_count}
        for action, count in action_counts.items()
    ])
    
    # Sort actions alphabetically
    df = df.sort_values('Action')
    
    # Create plot
    plt.figure(figsize=(10, 6))
    sns.barplot(data=df, x='Action', y='Percentage')
    plt.title(title)
    plt.xticks(rotation=45)
    plt.ylabel('Relative Frequency')
    plt.tight_layout()
    
    # Save plot if output directory is specified
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, f'{title.lower()}.png')
        plt.savefig(output_path)
    plt.close()

def plot_actions_per_response(data: Dict, title: str = "Actions per Response Distribution", output_dir: str = None):
    """
    Create histogram showing distribution of number of actions per response
    
    Args:
        data: Dictionary containing conversation data
        title: Title for the plot
        output_dir: Directory to save the plot in. If None, plot will only be displayed.
    """
    # Count actions per response
    actions_per_response = []
    
    for conv_id, conv_data in data.items():
        # Handle both single response and ensemble (list) formats
        responses = conv_data if isinstance(conv_data, list) else [conv_data]
        
        for response in responses:
            actions_per_response.append(len(response['actions']))
    
    # Create plot
    plt.figure(figsize=(10, 6))
    # Normalize the histogram values
    sns.histplot(actions_per_response, discrete=True, stat='probability')
    plt.title(title)
    plt.xlabel('Number of Actions per Response')
    plt.ylabel('Relative Frequency')
    # Set x-axis limits and ticks
    plt.xlim(0.5, 4.5)  # Set limits to show bins centered on integers 1-4
    plt.xticks(range(1, 5))  # Show ticks from 1 to 4
    plt.tight_layout()
    
    # Save plot if output directory is specified
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, f'{title.lower()}.png')
        plt.savefig(output_path)
    plt.close()

if __name__ == "__main__":
    # Create base plots directory
    os.makedirs('plots', exist_ok=True)
    
    # Plot distributions for each model
    files = [
        ("data/cima_formatted.json", "Action Distribution - CIMA"),
        ("data/gemini-pro-1.5_responses.json", "Action Distribution - Gemini Pro"), 
        ("data/gpt-4o-2024-08-06_responses.json", "Action Distribution - GPT-4o"),
        ("data/llama-3.1-405b-instruct:nitro_responses.json", "Action Distribution - LLaMA")
    ]
    
    # Plot action distributions
    action_dist_output_dir = os.path.join('plots', 'action_dist')
    actions_per_response_dir = os.path.join('plots', 'actions_per_response')
    
    for file_path, base_title in files:
        data = load_json_data(file_path)
        # Original action distribution plot
        plot_action_distribution(data, f"Action Distribution - {base_title.split(' - ')[1]}", action_dist_output_dir)
        # New actions per response plot
        plot_actions_per_response(data, f"Actions per Response - {base_title.split(' - ')[1]}", 
                                actions_per_response_dir)