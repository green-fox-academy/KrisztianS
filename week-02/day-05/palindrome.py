word = "green"
word_backward = word[::-1]

def palindrome(word):
    print(word + word_backward)
    
palindrome(word)