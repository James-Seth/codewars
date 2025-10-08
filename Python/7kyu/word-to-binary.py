#Describtion:
# Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

# Example: 'man' should return [ '01101101', '01100001', '01101110' ]

#Solution:
def word_to_bin(word):
    return [ f"{ord(c):08b}" for c in word ]

#Other solutions:
def word_to_bin(word):
    return [format(ord(c), '08b') for c in word]