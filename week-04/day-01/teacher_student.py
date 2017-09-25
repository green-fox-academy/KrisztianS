# Create Student and Teacher classes
# Student
# learn()
# question(teacher) -> calls the teachers answer method
# Teacher
# teach(student) -> calls the students learn method
# answer()

class Student(object):
    def learn(self):
        print("I'm learning!")
        
    def question(self):    
        Teacher.answer(self)


class Teacher(object):
    def teach(self):
        Student.learn(self)
    def answer(self):
        print("I'm teaching!")

teacher = Teacher()
student = Student()
teacher.teach() 
