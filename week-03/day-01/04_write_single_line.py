# Open a file called "my-file.txt"
# Write your name in it as a single line
# If the program is unable to write the file,
# then it should print an error message like: "Unable to write file: my-file.txt"
try:
    file = open("my-file.txt", "w")
    file.write("Krisztian Szucs")
    file.close()
except IOError:
    print("Unable to write file:" + file)
    file.close()