# draw a box that has different colored lines on each edge.
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

left = canvas.create_line(100, 100, 100, 200, fill='green')
top = canvas.create_line(100, 100, 200, 100, fill='red')
right = canvas.create_line(200, 100, 200, 200, fill='blue')
bottom = canvas.create_line(100, 200, 200, 200, fill='black')

root.mainloop()