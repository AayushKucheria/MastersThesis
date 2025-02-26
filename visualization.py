import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from typing import Dict, List
import json
import os

from main import load_dataset, process_all_conversations

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
    
    # Create plot with larger font sizes
    plt.figure(figsize=(12, 8))
    sns.barplot(data=df, x='Action', y='Percentage')
    plt.title(title, fontsize=24, pad=20)
    plt.xticks(rotation=45, fontsize=20)
    plt.yticks(fontsize=20)
    plt.xlabel('Action', fontsize=22, labelpad=15)
    plt.ylabel('Relative Frequency', fontsize=22, labelpad=15)
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
    
    # Create plot with larger font sizes
    plt.figure(figsize=(12, 8))
    # Normalize the histogram values
    sns.histplot(actions_per_response, discrete=True, stat='probability')
    plt.title(title, fontsize=24, pad=20)
    plt.xlabel('Number of Actions per Response', fontsize=22, labelpad=15)
    plt.ylabel('Relative Frequency', fontsize=22, labelpad=15)
    # Set x-axis limits and ticks
    plt.xlim(0.5, 4.5)  # Set limits to show bins centered on integers 1-4
    plt.xticks(range(1, 5), fontsize=20)  # Show ticks from 1 to 4
    plt.yticks(fontsize=20)
    plt.tight_layout()
    
    # Save plot if output directory is specified
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, f'{title.lower()}.png')
        plt.savefig(output_path)
    plt.close()

def plot_conditional_distribution(tutor_data, title: str = "Student-Tutor Interaction Flow", output_dir: str = None):
    data = load_dataset()
    processed_conversations = process_all_conversations(data)
    
    student_actions_dict = {i: conversation.student_actions 
                          for i, conversation in enumerate(processed_conversations)}

    # Calculate interaction counts
    conditional_counts = {}
    student_action_counts = {}
    
    # First pass: count total interactions
    total_interactions = 0
    for conv_id, tutor_response in tutor_data.items():
        conv_id = int(conv_id)
        student_actions = student_actions_dict.get(conv_id, [])
        responses = tutor_response if isinstance(tutor_response, list) else [tutor_response]
        
        for student_action in student_actions:
            student_action_counts[student_action] = student_action_counts.get(student_action, 0) + 1
            total_interactions += 1
            
        for student_action in student_actions:
            for response in responses:
                for tutor_action in response['actions']:
                    key = (student_action, tutor_action)
                    conditional_counts[key] = conditional_counts.get(key, 0) + 1
    
    # Calculate normalized percentages
    student_percentages = {action: (count / total_interactions) * 100 
                         for action, count in student_action_counts.items()}
    
    flow_percentages = {}
    for (student_action, tutor_action), count in conditional_counts.items():
        # Calculate as percentage of total interactions
        flow_percentages[(student_action, tutor_action)] = (count / total_interactions) * 100

    import plotly.graph_objects as go

    # Get unique actions and create mapping dictionaries
    student_actions = sorted(list(student_action_counts.keys()))
    tutor_actions = sorted(list(set(ta for _, ta in conditional_counts.keys())))
    
    # Create mapping dictionaries for indices
    student_to_idx = {action: idx for idx, action in enumerate(student_actions)}
    tutor_to_idx = {action: idx + len(student_actions) for idx, action in enumerate(tutor_actions)}
    
    # Create better formatted labels with percentages
    student_labels = [f"{action.title()}<br>({student_percentages[action]:.1f}%)" 
                     for action in student_actions]
    tutor_labels = [action.title() for action in tutor_actions]
    node_labels = student_labels + tutor_labels

    # Create source, target, and value lists using the mapping dictionaries
    sources, targets, values, hover_text = [], [], [], []
    
    for (student_action, tutor_action), percentage in flow_percentages.items():
        source_idx = student_to_idx[student_action]
        target_idx = tutor_to_idx[tutor_action]
        
        sources.append(source_idx)
        targets.append(target_idx)
        values.append(percentage)  # Use percentage as value
        
        # Calculate conditional probability for this flow
        student_total = student_action_counts[student_action]
        conditional_prob = (conditional_counts[(student_action, tutor_action)] / student_total) * 100
        
        # Create hover text
        hover_text.append(
            f"From {student_action.title()} to {tutor_action.title()}<br>"
            f"{percentage:.1f}% of all interactions<br>"
            f"{conditional_prob:.1f}% of {student_action.title()} actions"
        )

    # Custom color scheme
    student_color = "#2E86C1"  # Deeper blue
    tutor_color = "#E67E22"    # Warmer orange
    
    # Create Sankey diagram with improved styling
    fig = go.Figure(data=[go.Sankey(
        node = dict(
            pad = 30,
            thickness = 30,
            line = dict(color = "black", width = 0.5),
            label = node_labels,
            color = [student_color] * len(student_actions) + 
                   [tutor_color] * len(tutor_actions),
            customdata = node_labels,
            hoverlabel = dict(bgcolor = 'white'),
            hovertemplate = '%{customdata}<extra></extra>'
        ),
        link = dict(
            source = sources,
            target = targets,
            value = values,
            # hovertext = hover_text,
            # hovertemplate = '%{hovertext}<extra></extra>',
            color = [f"rgba(180, 180, 180, 0.2)"] * len(sources)
        )
    )])

    # Update layout with improved styling and larger font sizes
    fig.update_layout(
        title = dict(
            text = f"<b>{title}</b><br><sub></sub>",
            x = 0.5,
            y = 0.95,
            xanchor = 'center',
            yanchor = 'top',
            font = dict(size=40)
        ),
        font = dict(
            family = "Arial",
            size = 32
        ),
        height = 800,
        width = 1200,
        paper_bgcolor = 'white',
        plot_bgcolor = 'white',
        showlegend = False,
        margin = dict(t=100, l=50, r=50, b=50)
    )
    
    # Add section headers with improved styling and larger font sizes
    fig.add_annotation(
        x=0.15, y=1.12,
        text="<b>Student Actions</b>",
        showarrow=False,
        font=dict(size=36, color=student_color)
    )
    fig.add_annotation(
        x=0.85, y=1.12,
        text="<b>Tutor Actions</b>",
        showarrow=False,
        font=dict(size=36, color=tutor_color)
    )
    
    # Add explanatory note with larger font size
    fig.add_annotation(
        x=0.5, y=-0.1,
        text="Width of flows shows percentage of total interactions. Hover over elements for details.",
        showarrow=False,
        font=dict(size=28, color="gray"),
        xref="paper", yref="paper"
    )
    
    # Save plot if output directory is specified
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)
        
        # Save as interactive HTML
        html_path = os.path.join(output_dir, f'{title.lower()}.html')
        try:
            fig.write_html(
                html_path,
                include_plotlyjs='cdn',
                full_html=True,
                auto_open=False
            )
        except Exception as e:
            print(f"Error saving HTML: {str(e)}")
    
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
    conditional_flow_output_dir = os.path.join('plots', 'conditional_flows')
    
    for file_path, base_title in files:
        data = load_json_data(file_path)
        plot_action_distribution(data, f"Action Distribution - {base_title.split(' - ')[1]}", action_dist_output_dir)
        plot_actions_per_response(data, f"Actions per Response - {base_title.split(' - ')[1]}", actions_per_response_dir)
        plot_conditional_distribution(data, f"Interaction Flow - {base_title.split(' - ')[1]}", conditional_flow_output_dir)