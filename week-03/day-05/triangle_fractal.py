from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def draw_triangle(x, y, size):
    height = (3**0.5 / 2) * size
    canvas.create_polygon(x, y,
                          x + size, y,
                          x + size / 2, y + height, fill="", outline="black")

def draw_inner_triangle(x, y, size):
    if size > 5:
        draw_triangle( x, y, size )
        #canvas.create_polygon(x, y, x + size / 2, ((size**2) - (size / 2 **2)) **0.5, x - size / 2, ((size**2) - (size / 2 **2)) **0.5, fill="", outline="black")
        draw_inner_triangle(x + size / 2, y, size / 2)
        draw_inner_triangle(x + size / 4, y + ((3**0.5 / 2) * size)/2, size / 2)
        draw_inner_triangle(x, y, size / 2)
        

    
#draw_triangle(50, 50, 300)
draw_inner_triangle(1, 50, 600)

root.mainloop()