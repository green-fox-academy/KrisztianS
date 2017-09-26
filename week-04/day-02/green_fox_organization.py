class Person():

    def __init__(self, name="Jane Doe", age=30, gender="female"):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
         print("Hi, I'm {}, a {} year old {}.".format(self.name, self.age, self.gender))

    def get_goal(self):
        print("My goal is: Live for the moment!")

class Student(Person):
    def __init__(self, name="Jane Doe", age=30, gender="female", previous_organization="The School of Life"):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = 0

    def introduce(self):
        print("Hi, I'm {}, a {} year old {} from {} who skipped {} days from the course already.".format(self.name, self.age, self.gender, self.previous_organization, self.skipped_days))
    
    def get_goal(self):
        print("Be a junior sofware developer.")

class Mentor(Person):

    def __init__(self, name="Jane Doe", age=30, gender="female", level="intermediate"):
        super().__init__(name, age, gender)
        self.level = level

    def introduce(self):
        print("Hi, I'm {}, a {} year old {} {} mentor.".format(self.name, self.age, self.gender, self.level))

    def get_goal(self):
        print("Educate brilliant junior software developers.")

class Sponsor(Person):
    
    def __init__(self, name="Jane Doe", age=30, gender="female", company="Google" , hired_students=0):
        super().__init__(name, age, gender)
        self.company = company
        self.hired_students = hired_students

    def introduce(self):
         print("Hi, I'm {}, a {} year old {} who represents {} and hired {} students so far.".format(self.name, self.age, self.gender, self.company, self.hired_students))
    
    def get_goal(self):
        print("Hire brilliant junior software developers.")
    
    def hire(self):
        self.hired_students += 1
