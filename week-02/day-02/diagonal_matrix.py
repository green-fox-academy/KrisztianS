# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output
l = []
for i in range(4):
    x = []
    for j in range(4):
        if i == j:
            x.append("1")
        else: 
            x.append("0")       
    l.append(x)
for i in l:
    print(i)