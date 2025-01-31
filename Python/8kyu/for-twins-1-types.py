#Describtion:

#Solution:
def type_validation(variable, _type): 
    return _type in str(type(variable))

#Other solutions:
def type_validation(variable, _type):

    return type(variable).__name__ == _type