# Write a program that reads a number form the standard input,
# Than prints "Odd" if the number is odd, or "Even" it it is even.
x = input("Give me a number: ")
if int(x) % 2 == 0:
    print("Its even!")
else:
    print("Its odd!")