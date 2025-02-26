import matplotlib.pyplot as plt
import os
from PIL import Image
import math
import numpy as np

def combine_plots_from_folder(folder_path, output_filename='combined_plots.png', max_size=(2000, 2000)):
    """
    Combines all image files from a folder into a grid layout
    
    Args:
        folder_path (str): Path to the folder containing plot images
        output_filename (str): Name of the output file (default: 'combined_plots.png')
        max_size (tuple): Maximum dimensions (width, height) for the output image
    """
    # Get all image files from the folder
    image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    if not image_files:
        print("No image files found in the specified folder")
        return
    
    # Calculate grid dimensions
    n_images = len(image_files)
    n_cols = math.ceil(math.sqrt(n_images))
    n_rows = math.ceil(n_images / n_cols)
    
    # Create figure with subplots
    fig, axes = plt.subplots(n_rows, n_cols, figsize=(15, 15))
    fig.tight_layout(pad=3.0)
    
    # If there's only one subplot, wrap it in a list for consistent indexing
    if n_images == 1:
        axes = np.array([[axes]])
    elif n_rows == 1:
        axes = axes.reshape(1, -1)
    
    # Plot each image
    for idx, img_file in enumerate(image_files):
        row = idx // n_cols
        col = idx % n_cols
        
        
        img = Image.open(os.path.join(folder_path, img_file))
            
        axes[row, col].imshow(img)
        axes[row, col].axis('off')
    
    # Hide empty subplots
    for idx in range(n_images, n_rows * n_cols):
        row = idx // n_cols
        col = idx % n_cols
        axes[row, col].axis('off')
        axes[row, col].set_visible(False)
    
    # Create grid subdirectory if it doesn't exist
    os.makedirs('plots/grid', exist_ok=True)
    
    # Save the combined plot
    plt.savefig(os.path.join('plots/grid', output_filename), bbox_inches='tight', dpi=300)
    # plt.show()
    plt.close()

if __name__ == "__main__":
    # Create plots directory if it doesn't exist
    os.makedirs('plots', exist_ok=True)

    combine_plots_from_folder('plots/action_dist', 'action_dist.png')
    combine_plots_from_folder('plots/actions_per_response', 'actions_per_response.png')
    combine_plots_from_folder('plots/conditional_flows', 'conditional_flows.png')

    
    

