#Describtion:
# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.

#Solution
def disemvowel(string_):
    vowels = ['a','e','i','o','u']
    new_string = [l for l in string_ if l.lower() not in vowels]
    new_string = "".join(new_string)
    return new_string

#Other solutions:
import re
def disemvowel(string):
    return re.sub('[aeiou]', '', string, flags = re.IGNORECASE)

#Another 
def disemvowel(s):  
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s