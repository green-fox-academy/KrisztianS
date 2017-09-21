# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".
def x_to_y_changer(string):
    new_string = ""
    if len(string) == 0:
        return new_string
    else:
        new_string = new_string + string[0] + "*"
        return new_string + x_to_y_changer(string[1:])

print(x_to_y_changer("stars everywhere"))