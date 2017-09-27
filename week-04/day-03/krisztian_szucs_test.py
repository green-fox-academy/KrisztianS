import unittest
from krisztian_szucs_work import Apple

class AppleTest(unittest.TestCase):
    
    def test_get_apple(self):
        
        my_tiny_apple = Apple()
        self.assertEqual(my_tiny_apple.get_apple(), "apple")

if __name__ == '__main__':
    unittest.main()