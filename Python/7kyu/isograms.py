#Decribtion:

#Solution:
def is_isogram(string):
    string = string.lower()
    
    return len(set(string)) == len(string)
    
#Other solutions:
def is_isogram(string):
    string = string.lower()

    for letter in string:
        if string.count(letter) > 1: return False
    return True 