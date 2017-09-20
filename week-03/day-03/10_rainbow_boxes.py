# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.
import random
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
color = ["red", "blue", "green", "yellow", "purple", "grey", "pink", "gold", "cyan"]

def rainbow_squares(size):
    for i in range(60):
        canvas.create_rectangle(150-size/2, 150-size/2, 150+size/2, 150+size/2, fill=random.choice(color))
        size -= 5

rainbow_squares(300)

root.mainloop()