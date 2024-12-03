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
class ProcessedTurn:
    """A single exchange between student and tutor"""
    # The sequential information
    tutor_prompt: str    # From past_convo[i]
    student_response: str  # From past_convo[i+1]
    turn_index: int

    # Actions and responses
    student_actions: List[bool]  # [guess, question, affirmation, other]
    tutor_responses: List[TutorResponse]  # Always 3 responses
    
    # The exercise context (same for all turns in a conversation)
    target: dict  # Contains all target words/translations
        # {'prep': 'e dietro', 'engPrep': 'is behind the',
        #  'obj': 'l'albero', 'engObj': 'tree',
        #  'color': 'rosa', 'engColor': 'pink'}
    grammar_rules: List[str]
    img_path: str

def process_conversation(data: Dict) -> List[ProcessedTurn]:
        """Process a single conversation into a list of turns"""
        turns = []

        # Basic validation
        required_fields = ['past_convo', 'prep', 'obj', 'color', 'grammarRules', 'studentActions', 'tutorResponses', 'tutorActions']
        if not all(field in data for field in required_fields):
            raise ValueError(f"Missing required fields in conversation data")
        
        # Extract exercise context (constant across turns)
        target = {
            'prep': data['prep'], 'engPrep': data['engPrep'],
            'obj': data['obj'], 'engObj': data['engObj'], 
            'color': data['color'], 'engColor': data['engColor']
        }

        # Extract grammar rules (removing escaped quotes)
        print("Calling the parse grammar rules fuction")
        grammar_rules = parse_grammar_rules(data['grammarRules'])
        
        # Process conversation turns
        past_convo = data['past_convo']
        for i in range(0, len(past_convo)-1, 2):  # Step by 2 to get tutor-student pairs

            # Create tutor responses
            tutor_responses = [
                TutorResponse(response=resp, actions=actions)
                for resp, actions in zip(data['tutorResponses'], data['tutorActions'])
            ]

            turn = ProcessedTurn(
                tutor_prompt=past_convo[i],
                student_response=past_convo[i+1],
                turn_index=i//2,
                student_actions=data['studentActions'],
                tutor_responses=tutor_responses,
                target=target,
                grammar_rules=grammar_rules,
                img_path=data['img'].strip('"')
            )
            turns.append(turn)
        
        return turns

def parse_grammar_rules(grammar_string: str) -> List[str]:
    """
    Parse grammar rules from string format into list of rules.
    Returns only the rules, not the explanations.
    """
    print("\nDEBUG: Starting grammar rule parsing")
    print(f"Original string: {grammar_string[:100]}...")
    
    # Extract just the grammar rules part (everything up to ']]')
    grammar_part = grammar_string[:grammar_string.find(']]') + 2]
    print(f"Grammar part only: {grammar_part[:100]}...")
    
    try:
        print("Attempting ast.literal_eval...")
        rules_list = ast.literal_eval(grammar_part)
        print(f"Rules list after eval: {rules_list}")
        rules = [pair[0] for pair in rules_list]
        print(f"Final rules: {rules}")
        return rules
    except (ValueError, SyntaxError) as e:
        print(f"Error parsing grammar rules: {e}")
        print(f"Failed string: {grammar_part}")
        return []

class DataProcessor:
    def __init__(self, raw_data: Dict):
        self.raw_data = raw_data
        self.processed_turns: List[ProcessedTurn] = []
        
    def process_all(self):
        """Process all conversations into a standard format"""
        for conv_id, conv_data in self.raw_data.items():
            turns = process_conversation(conv_data)
            self.processed_turns.extend(turns)
    
    
    
    def get_psychometric_data(self) -> Tuple[List, List]:
        """Format data for psychometric alignment study"""
        student_responses = []
        tutor_responses = []
        for turn in self.processed_turns:
            # Extract features needed for psychometric analysis
            student_data = {
                'utterance': turn.student_utterance,
                'actions': turn.student_actions,
                'context': turn.context
            }
            student_responses.append(student_data)
            
            # Get all tutor responses for comparison
            tutor_data = {
                'responses': turn.tutor_responses,
                'actions': turn.tutor_actions,
                'context': turn.context
            }
            tutor_responses.append(tutor_data)
            
        return student_responses, tutor_responses
    
    def get_action_classification_data(self) -> List[Dict]:
        """Format data for action classification study"""
        classification_data = []
        for turn in self.processed_turns:
            # Create examples for action classification
            for response, actions in zip(turn.tutor_responses, turn.tutor_actions):
                example = {
                    'student_context': turn.student_utterance,
                    'tutor_response': response,
                    'actions': actions,
                    'turn_context': turn.context
                }
                classification_data.append(example)
                
        return classification_data