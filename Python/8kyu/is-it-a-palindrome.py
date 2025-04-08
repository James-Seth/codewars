#Describtion:
# Write a function that checks if a given string (case insensitive) is a palindrome.

# A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

#Solution:
def is_palindrome(s):
    return True if s[::-1].lower() == s.lower() else False

#Other solutions:
def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]
