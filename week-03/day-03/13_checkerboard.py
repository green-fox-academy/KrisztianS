# fill the canvas with a checkerboard pattern.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


def draw_checkered():
    x = 0
    y = 0

    for j in range(6):
        

        for i in range(3):
            canvas.create_rectangle(x, y, x+50, y+50, fill="black")
            x += 100
    

draw_checkered()
root.mainloop()