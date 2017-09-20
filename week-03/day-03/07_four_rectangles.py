# draw four different size and color rectangles.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

canvas.create_rectangle(50, 50, 100, 100)
canvas.create_rectangle(50, 170, 120, 110)
canvas.create_rectangle(150, 50, 200, 125)
canvas.create_rectangle(200, 200, 250, 290)

root.mainloop()