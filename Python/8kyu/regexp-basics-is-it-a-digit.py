#Describtion:
# Implement String #digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

#Solution:
def is_digit(n):
    if len(n) > 1:
        return False
    else:
        return n.isdigit()

#Other solutions:
def is_digit(n):
    return n.isdigit() and len(n)==1