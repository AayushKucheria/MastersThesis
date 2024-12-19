from dataclasses import dataclass
import json
from typing import List, Dict, Optional, Tuple
from enum import Enum
import ast

@dataclass
class TutorResponse:
    """A single tutor's response and their actions"""
    response: str
    actions: List[bool]  # [question, hint, correction, confirmation, other]

@dataclass
class ProcessedConversation:
    """A single exchange between student and tutor"""

    # Actions and responses
    student_actions: List[bool]  # [guess, question, affirmation, other]
    tutor_responses: List[TutorResponse]  # Always 3 responses
    context: dict  # Contains all target words/translations

def process_conversation(data: Dict) -> List[ProcessedConversation]:
    """Process a single conversation"""

    # Basic validation
    required_fields = ['past_convo', 'prep', 'obj', 'color', 'grammarRules', 'studentActions', 'tutorResponses', 'tutorActions']
    if not all(field in data for field in required_fields):
        raise ValueError(f"Missing required fields in conversation data")
    
    # Combine target phrase components #TODO: IDK if this is correct. Check conv 1 for example.
    target_phrase = {
        'it': f"{data['prep']} {data['obj']} {data['color']}",
        'en': f"{data['engPrep']} {data['engObj']} {data['engColor']}"
    }

    context = {
        'target_phrase': target_phrase,
        'grammar_rules': parse_grammar_rules(data['grammarRules']),
        'conversation_history': data['past_convo'],
    }   

    tutor_responses = [
        TutorResponse(response=resp, actions=process_tutor_actions(actions))
        for resp, actions in zip(data['tutorResponses'], data['tutorActions'])
    ]

    student_actions = process_student_actions(data['studentActions'])
    
    conv = ProcessedConversation(
        student_actions=student_actions,
        tutor_responses=tutor_responses,
        context=context
    )
    return conv

def process_student_actions(actions: List[bool]) -> List[str]:
    """Process raw student actions into a list of action types

    Args:
        actions: List of booleans indicating which actions are active
                [True, False, True, False] means the first and third actions are active
    
    Returns:
        List of action type strings that were marked as True
    """
    action_types = ['guess', 'question', 'affirmation', 'other']
    result = []
    
    # Loop through both lists at the same time using their index
    for i in range(len(actions)):
        is_active = actions[i].lower() == 'true'
        action_type = action_types[i]

        
        # If this action is marked as True, add its type to our result
        if is_active:
            result.append(action_type)
    return result

def process_tutor_actions(actions: List[bool]) -> List[str]:
    """Process raw tutor actions into a list of action types

    Args:
        actions: List of booleans indicating which actions are active
                [True, False, True, False] means the first and third actions are active
    
    Returns:
        List of action type strings that were marked as True
    """
    action_types = ['question', 'hint', 'correction', 'confirmation', 'other']
    result = []
    
    # Loop through both lists at the same time using their index
    for i in range(len(actions)):
        is_active = actions[i]
        action_type = action_types[i]
        
        # If this action is marked as True, add its type to our result
        if is_active:
            result.append(action_type)
    return result

def parse_grammar_rules(grammar_string: str) -> List[str]:
    """
    Parse grammar rules from string format into list of rules.
    Reconversations only the rules, not the explanations.
    """
    
    # Extract just the grammar rules part (everything up to ']]')
    grammar_part = grammar_string[:grammar_string.find(']]') + 2]
    
    try:
        rules_list = ast.literal_eval(grammar_part)
        rules = [pair[0] for pair in rules_list]
        return rules
    except (ValueError, SyntaxError) as e:
        print(f"Error parsing grammar rules: {e}")
        print(f"Failed string: {grammar_part}")
        return []

class DataProcessor:
    def __init__(self, raw_data: Dict):
        self.raw_data = raw_data
        self.processed_conversations: List[ProcessedConversation] = []
        
    def process_all(self):
        """Process all conversations into a standard format"""
        for conv_id, conv_data in self.raw_data.items():
            conversation = process_conversation(conv_data)
            self.processed_conversations.extend(conversation)