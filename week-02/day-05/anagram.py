input1 = "heart"
input2 = "earth"

def anagram(input1, input2):
    input1_list = list(input1)
    input1_list.sort()
    input2_list = list(input2)
    input2_list.sort()

    return input1_list == input2_list
print(anagram(input1, input2))

