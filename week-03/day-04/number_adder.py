# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def add_numbers(n):
    if n == 1:
        return 1
    else:
        return n + add_numbers(n-1)

print(add_numbers(5))