#Describtion:
# Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

# Write a function which takes a list of strings and returns each line prepended by the correct number.

# The numbering starts at 1. The format is n: string. Notice the colon and space in between.

# Examples: (Input --> Output)

# [] --> []
# ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

#Solution:
def number(lines):
    return ['{}: {}'.format(n, s) for (n, s) in enumerate(lines, 1)]    
#Other solutions:
def number(lines):
    #your code here
    a=[]
    for i,c in enumerate(lines,1):
        str_var = str(i) + ': ' + str(c) #make sure to add another space
        a.append(str_var)
    return a
    