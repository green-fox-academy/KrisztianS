# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

start_position = 10

for i in range(6):
    canvas.create_rectangle(start_position, start_position, start_position*2, start_position*2, fill="purple")
    start_position = start_position * 2
    
root.mainloop()