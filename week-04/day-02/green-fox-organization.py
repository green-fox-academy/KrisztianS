class Person():
    
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
         print("Hi, I\'m", self.name ,",", "a", self.age , "year old", self.gender ,".")

    def get_goal(self):
        print("My goal is: Live for the moment!")

jane = Person("Jane Doe", 30, "female")

jane.introduce()