import unittest
from krisztian_szucs_work import Apple

class AppleTest(unittest.TestCase):
    
    def test_get_apple(self):
        
        my_tiny_apple = Apple()
        self.assertEqual(my_tiny_apple.get_apple(), "apple")

    def test_sum_numbers(self):
        
        my_sum_of_numbers = Apple()
        numlist = [1, 2, 3, 4]
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), 10)
        numlist = []
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), 0)
        numlist = [1]
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), 1)
        numlist = None
        self.assertEqual(my_sum_of_numbers.sum_numbers(numlist), None)

if __name__ == '__main__':
    unittest.main()