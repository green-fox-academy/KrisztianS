# - Create variable named `al` and assign the value `Greenfox` to it
# - Create a function called `greet` that greets it's input parameter
#     - Greeting is printing e.g. `Greetings, dear Greenfox`
# - Greet `al`
al = "Greenfox"
def greet(al):
    new_name = "Greetings, dear " + al + "!"
    return new_name
print(greet(al))