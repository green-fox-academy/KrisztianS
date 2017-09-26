class Garden(object):
    
    def __init__(self):
        self.plants = []
        
    def add_plant(self, plant):
        self.plants.append(plant)

class Tree(object):
    def __init__(self, name):
        self.name = name

class Flower(object):
    pass
