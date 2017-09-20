# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def create_line_from_given_point(x, y):
    canvas.create_line(x, y, x+50, y, fill="red")
create_line_from_given_point(150, 150)
create_line_from_given_point(100, 100)
create_line_from_given_point(50, 50)
root.mainloop()