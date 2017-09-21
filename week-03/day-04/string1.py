# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.
def x_to_y_changer(string):
    new_string = ""
    if len(string) == 0:
        return new_string
    else:
        if string[0] == "x":
            new_string = new_string + "y"
            return new_string + x_to_y_changer(string[1:])
        else:
            new_string = new_string + string[0]
            return new_string + x_to_y_changer(string[1:])

print(x_to_y_changer("xxx"))