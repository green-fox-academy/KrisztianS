# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def centered_square_drawer(size):
    canvas.create_rectangle(150-size/2, 150-size/2, 150+size/2, 150+size/2)
centered_square_drawer(50)
centered_square_drawer(100)
centered_square_drawer(150)

root.mainloop()