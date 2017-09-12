# - Create a function called `factorio`
#   that returns it's input's factorial
n = 5
def factorio(n):
    output = 1
    for i in range(1,n+1):
        output *= i
    return output
print(factorio(n))