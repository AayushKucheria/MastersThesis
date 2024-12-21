from dataclasses import dataclass
from typing import List, Dict
import json
from openai import OpenAI
from data_processing import ProcessedConversation, TutorResponse

@dataclass
class LLMResponse:
    """Stores response from language model"""
    response: str
    actions: List[str]  # [question, hint, correction, confirmation, other]
    model_name: str

class LLMTutor:
    def __init__(self, api_key: str):
        self.client = OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=api_key
        )

    def generate_response(self, conversation: ProcessedConversation, model_name: str) -> LLMResponse:
        """Generate response for a single conversation turn"""
        
        # Construct prompt
        system_prompt = self._build_system_prompt(conversation)
        user_prompt = self._build_user_prompt(conversation)
        
        # Get response from model
        response = self.client.chat.completions.create(
            model=model_name,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            response_format={
                "type": "json_schema",
                "json_schema": {
                    "name": "tutor_response",
                    "strict": True,
                    "schema": {
                        "type": "object",
                        "properties": {
                            "response": {
                                "type": "string",
                                "description": "The tutor's response text"
                            },
                            "actions": {
                                "type": "array",
                                "items": {
                                    "type": "string",
                                    "enum": ["question", "hint", "correction", "confirmation", "other"]
                                },
                                "description": "List of action types for this response"
                            }
                        },
                        "required": ["response", "actions"],
                    }
                }
            }
        )

        # print(response)
        
        # Parse JSON response
        try:
            response_content = json.loads(response.choices[0].message.content)
            # print("Parsed response:", response_content)
            return LLMResponse(
                response=response_content["response"],
                actions=response_content["actions"],
                model_name=model_name
            )
        except (json.JSONDecodeError, KeyError) as e:
            error_msg = f"Error parsing model response: {e}"
            print(error_msg)
            print("Raw response:", response.choices[0].message.content)
            return LLMResponse(
                response=error_msg,
                actions=["other"],  # Use a valid action type instead of False values
                model_name=model_name
            )

    def _build_system_prompt(self, conversation: ProcessedConversation) -> str:
        """Build system prompt with context and instructions"""
        target_phrase = conversation.context['target_phrase']
        return f"""You are a language tutor teaching Italian. 

Available actions (one response can correspond to multiple action types):
- Question: Ask student for clarification or to elaborate
- Hint: Provide indirect guidance
- Correction: Point out and fix errors
- Confirmation: Acknowledge correct responses
- Other: Any other type of response

Context:
- Target phrase (IT): {target_phrase['it']}
- Target phrase (EN): {target_phrase['en']}
- Grammar rules: {conversation.context['grammar_rules']}

Respond in JSON format with:
{{
    "response": "your response text",
    "actions": ["your action types"]  // Corresponds to actions list above (lowercase). One response can correspond to multiple action types.
}}"""

    def _build_user_prompt(self, conversation: ProcessedConversation) -> str:
        """Build user prompt with conversation history"""
        return f"""Conversation history:
{conversation.context['conversation_history']}

Please provide a response as a tutor to the student's last message."""