#Describtion:

#Solution:
def strCount(string, letter):
    return string.count(letter)

#Other solutions:
def str_count(strng, letter):
    counter = 0
    
    for chr in strng:
        if chr == letter:
            counter += 1
        
    return counter