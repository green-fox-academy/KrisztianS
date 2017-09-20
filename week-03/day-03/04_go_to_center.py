from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def line_to_the_center(x, y):
    canvas.create_line(x, y, 150, 150)

(line_to_the_center(150, 250))
(line_to_the_center(110, 20))
(line_to_the_center(40, 40))


root.mainloop()