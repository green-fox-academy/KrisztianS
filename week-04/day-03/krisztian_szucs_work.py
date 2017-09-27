class Apple(object):

    def get_apple(self):
        return "apple"

    def sum_numbers(self, numlist):
        if numlist == None:
            return None
        return sum(numlist)