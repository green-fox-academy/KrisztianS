# Write a function that takes a filename as string,
# then returns the number of lines the file contains.
# It should return zero if it can't open the file, and
# should not raise any error.
filename = ""

def linecounter():
    try:
        with open(filename) as f:
            print(len(f.readlines()))
    except FileNotFoundError:
        return 0