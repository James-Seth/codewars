#Describtion:
# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

#Solution:
def remove_char(s):
    return s[1:-1]

#Other solutions:
def remove_char(s):
    return '' if len(s) <= 2 else s[1:-1]