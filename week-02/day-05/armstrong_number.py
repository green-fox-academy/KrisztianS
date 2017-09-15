number = input("Give me a number: ")
def armstrong_checker(number):
    armstrong = 0
    length = len(number)
    for i in range(len(number)):
        armstrong += int(number[i]) ** length
        if armstrong == int(number):
            print("The " + number + " is an armstrong number!")

armstrong_checker(number)