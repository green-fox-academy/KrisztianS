# Write a function that copies a file to an other
# It should take the filenames as parameters
# It should return a boolean that shows if the copy was successful
from shutil import copyfile

file1_name = "first_file.txt"
file2 = "dest_file.txt"

def filefusion(file1_name, file2):
    try:
        copyfile(file1_name, file2)
        return True
    except:
        raise 
        return False

print(filefusion(file1_name, file2))