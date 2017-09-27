import unittest
from krisztian_szucs_work import Apple

class AppleTest(unittest.TestCase):
    
    def test_get_apple(self):
        
        my_tiny_apple = Apple()
        self.assertEqual(my_tiny_apple.get_apple(), "apple")

    def test_sum_numbers_multiple_numbers(self):
        my_sum_of_numbers = Apple()
        numlist = [1, 2, 3, 4]
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), 10)
    def test_sum_numbers_empty_list(self):
        my_sum_of_numbers = Apple()
        numlist = []
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), 0)
    def test_sum_numbers_one_number(self):
        my_sum_of_numbers = Apple()
        numlist = [1]
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), 1)
    def test_sum_numbers_null(self):
        my_sum_of_numbers = Apple()
        numlist = None
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), None)

    def test_anagram_two_words(self):
        my_anagram = Apple()
        input1 = "earth"
        input2 = "heart"
        self.assertEqual(my_anagram.anagram(input1, input2), True)

    def test_count_letter_one_letter(self):
        letter_counter = Apple()
        self.assertEqual(letter_counter.count_letter("a"),{"a": 1})

    def test_count_letter_three_letter(self):
        letter_counter = Apple()
        self.assertEqual(letter_counter.count_letter("abc"),{"a":1, "b":1, "c":1})

if __name__ == '__main__':
    unittest.main()