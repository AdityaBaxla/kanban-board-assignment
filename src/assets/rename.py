import os

folder_path = "./avatars"  
file_count = 1

# Check if the folder exists
if os.path.exists(folder_path):
    for filename in os.listdir(folder_path):
        # Get the file extension
        file_name, file_extension = os.path.splitext(filename)
        if file_extension:  # Make sure it's a file, not a folder
            new_name = f"usr-{file_count}{file_extension}"
            old_path = os.path.join(folder_path, filename)
            new_path = os.path.join(folder_path, new_name)
            os.rename(old_path, new_path)
            file_count += 1
else:
    print("The specified folder does not exist.")
