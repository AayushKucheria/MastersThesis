import json

def transform_cima_to_gemini_format(cima_data):
    responses = {}
    
    # Iterate through each conversation in the dataset
    for idx, convo in cima_data["prepDataset"].items():
        # Create an array to hold all response-action pairs for this conversation
        responses[idx] = []
        
        # Get the tutor responses and create entries for each
        for response_idx, response in enumerate(convo["tutorResponses"]):
            # Create a response object similar to Gemini format
            response_obj = {
                "response": response,
                "actions": []
            }
            
            # Extract actions from tutorActions
            if response_idx < len(convo["tutorActions"]):
                actions = convo["tutorActions"][response_idx]
                action_types = ["question", "hint", "correction", "confirmation", "other"]
                
                # Map boolean actions to strings based on the defined order
                response_obj["actions"] = [
                    action_type for action_type, is_present in zip(action_types, actions)
                    if is_present
                ]
            
            # Add this response object to the array for this conversation
            responses[idx].append(response_obj)
    
    return responses

def process_file(input_data):
    # Load and transform the data
    transformed_data = transform_cima_to_gemini_format(input_data)
    
    # Return the transformed data
    return transformed_data

# Example usage:
if __name__ == "__main__":
    # Read input data
    with open("cima_dataset.json", "r", encoding="utf-8") as f:
        input_data = json.load(f)
    
    # Process the data
    output_data = process_file(input_data)
    
    # Write the output
    with open("cima_gemini_format.json", "w", encoding="utf-8") as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)