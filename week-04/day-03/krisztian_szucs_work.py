class Apple(object):

    def get_apple(self):
        return "apple"

    def sum_numbers(self, numlist):
        if numlist == None:
            return None
        return sum(numlist)

    def anagram(self, input1, input2):
        
        input1_list = list(input1)
        input1_list.sort()
        input2_list = list(input2)
        input2_list.sort()
        return input1_list == input2_list

    def count_letter(self, input_string):
        my_dictionary = {}
        for letter in input_string:
            if letter in my_dictionary:
                my_dictionary[letter] += 1
            else:
                my_dictionary[letter] = 1
        return my_dictionary