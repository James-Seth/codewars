#Describtion:
#Is the string uppercase?
#Task

#Create a method to see whether the string is ALL CAPS.
#Examples (input -> output)

#"c" -> False
#"C" -> True
#"hello I AM DONALD" -> False
#"ACSKLDFJSgSKLDFJSKLDFJ" -> False
#"HELLO I AM DONALD" -> True
#"ACSKLDFJSGSKLDFJSKLDFJ" -> True

#In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

#Solution:
def is_uppercase(inp):
    return inp == inp.upper();

#Other solutions:
def is_uppercase(inp):
    for letter in inp:
        if letter in 'abcdefghijklmnopqrstuvwxyz':
            return False
    return True