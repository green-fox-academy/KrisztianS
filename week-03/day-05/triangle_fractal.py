from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_triangle(x, y, size):
    height = ((size**2) - (size / 2 **2)) **0.5
    canvas.create_polygon(x, y,
                          x + size, y,
                          size / 2, height, fill="", outline="black")

def draw_inner_triangle(x, y, size):
    if size > 10:
        


        canvas.create_polygon(x, y, x + size / 2, ((size**2) - (size / 2 **2)) **0.5, x - size / 2, ((size**2) - (size / 2 **2)) **0.5, fill="", outline="black")
        draw_inner_triangle(x + size / 2, y, size / 2)
        #draw_inner_triangle(x, ((size**2) - (size / 2 **2)) **0.5, size / 2)
        #draw_inner_triangle(x - size / 2, y, size / 2)
        

    
draw_triangle(0, 0, 600)
draw_inner_triangle(300, 0, 300)

root.mainloop()