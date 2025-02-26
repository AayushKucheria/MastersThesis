from dataclasses import dataclass
from typing import List, Dict
import numpy as np
from scipy import stats
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

from statsmodels.stats import inter_rater as irr

from data_processing import ProcessedConversation

@dataclass
class ActionAnalysis:
    def __init__(self):
        self.action_types = ['question', 'hint', 'correction', 'confirmation']
        
    def compute_action_distributions(self, responses: List[ProcessedConversation]) -> Dict:
        """Compute distribution of tutor actions across all responses"""
        action_counts = {action: 0 for action in self.action_types}
        total = 0
        
        for turn in responses:
            for tr in turn.tutor_responses:
                for i, action in enumerate(self.action_types):
                    if tr.actions[i]:
                        action_counts[action] += 1
                        total += 1
        
        return {k: v/total for k, v in action_counts.items()}

    def compute_conditional_distributions(self, responses: List[ProcessedConversation]) -> Dict:
        """Compute tutor action distributions conditioned on student action"""
        student_actions = ['guess', 'question', 'affirmation']
        conditional_dist = {}
        
        for student_action in student_actions:
            action_counts = {action: 0 for action in self.action_types}
            total = 0
            
            for turn in responses:
                # Check if student made this action
                if turn.student_actions[student_actions.index(student_action)]:
                    for tr in turn.tutor_responses:
                        for i, action in enumerate(self.action_types):
                            if tr.actions[i]:
                                action_counts[action] += 1
                                total += 1
                                
            if total > 0:
                conditional_dist[student_action] = {k: v/total for k, v in action_counts.items()}
            
        return conditional_dist

    def compute_agreement_metrics(self, responses: List[ProcessedConversation]) -> Dict:
        """Compute comprehensive agreement metrics between tutors"""
        # Overall agreement rate
        agreement_count = 0
        total = 0
        
        # Per-action agreement tracking
        action_agreements = {action: {'agree': 0, 'total': 0} for action in self.action_types}
        
        # Data for Fleiss' kappa
        kappa_data = []
        
        for turn in responses:
            # Track agreements for each action type
            for action_idx, action in enumerate(self.action_types):
                action_votes = [tr.actions[action_idx] for tr in turn.tutor_responses]
                
                # Pairwise agreements
                for i in range(len(action_votes)):
                    for j in range(i+1, len(action_votes)):
                        if action_votes[i] == action_votes[j]:
                            action_agreements[action]['agree'] += 1
                        action_agreements[action]['total'] += 1
            
            # Overall exact match agreement
            for i in range(len(turn.tutor_responses)):
                for j in range(i+1, len(turn.tutor_responses)):
                    if turn.tutor_responses[i].actions == turn.tutor_responses[j].actions:
                        agreement_count += 1
                    total += 1
            
        
        return {
            'overall_agreement': agreement_count / total if total > 0 else 0,
            'per_action_agreement': {
                action: stats['agree'] / stats['total'] if stats['total'] > 0 else 0 
                for action, stats in action_agreements.items()
            },
        }

    def plot_distributions(self, human_dist: Dict, llm_dist: Dict, title: str):
        """Plot comparison of human vs LLM action distributions"""
        df = pd.DataFrame({
            'Human': human_dist,
            'LLM': llm_dist
        }).reset_index()
        df = pd.melt(df, id_vars=['index'], var_name='Source', value_name='Probability')
        
        plt.figure(figsize=(10, 6))
        sns.barplot(data=df, x='index', y='Probability', hue='Source')
        plt.title(title)
        plt.xlabel('Action Type')
        plt.ylabel('Probability')
        plt.xticks(rotation=45)
        plt.tight_layout()
        plt.show()

    def statistical_comparison(self, human_responses: List[ProcessedConversation], 
                             llm_responses: List[ProcessedConversation]) -> Dict:
        """Run statistical tests comparing human and LLM distributions"""
        human_dist = self.compute_action_distributions(human_responses)
        llm_dist = self.compute_action_distributions(llm_responses)
        
        # Chi-square test
        human_counts = np.array([v * len(human_responses) for v in human_dist.values()])
        llm_counts = np.array([v * len(llm_responses) for v in llm_dist.values()])
        chi2, p_value = stats.chisquare(llm_counts, human_counts)
        
        return {
            'chi2_statistic': chi2,
            'p_value': p_value,
            'human_distribution': human_dist,
            'llm_distribution': llm_dist
        }