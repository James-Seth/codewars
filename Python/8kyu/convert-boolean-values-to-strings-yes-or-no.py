#Describtion:
# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

#Solution:
def bool_to_word(vboolean):
    return "Yes" if boolean == True else "No"

#Other solutions:
def bool_to_word(bool):
    if bool:
        return 'Yes'
    else:
        return 'No'