from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600', bg="yellow")
canvas.pack()

def top_level_lines(size):
    canvas.create_line(size/3, 0, size/3, size, fill='black')
    canvas.create_line(2*size/3, 0, 2*size/3, size, fill='black')
    canvas.create_line(0, size/3, size, size/3, fill='black')
    canvas.create_line(0, 2*size/3, size, 2*size/3, fill='black')
top_level_lines(600)

def draw_deeper_lines(num):
    if
    else:
        


        


root.mainloop()