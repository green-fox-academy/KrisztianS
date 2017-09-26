class Garden(object):
    
    def __init__(self):
        self.plants = []
        
    def add_plant(self, plant):
        self.plants.append(plant)

class Tree(object):

    def __init__(self, name):
        self.name = name

    if water_amount < 10:
        print("The {} needs water".format(self.name))
    else:
        print("The {} doesnt nedd water".format(self.name))

class Flower(Tree):
    
    if water_amount < 5:
        print("The {} nedds water". format(self.name))
    else:
        print("The {} doesnt nedd water".format(self.name))
    
