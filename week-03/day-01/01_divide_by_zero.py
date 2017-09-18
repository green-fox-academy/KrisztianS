# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0
num = int(input("Give me a number: "))
def divisor(num):
    try:
        print(10/num)
    except ZeroDivisionError:
        print("fail")
divisor(num)