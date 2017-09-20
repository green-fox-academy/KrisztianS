# draw a green 10x10 square to the center of the canvas.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

canvas.create_rectangle(125, 125, 175, 175, fill="green")

root.mainloop()