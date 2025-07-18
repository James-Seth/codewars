#Describtion:
# Write a function

# vowel_2_index

# that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
# E.g:

# vowel_2_index('this is my string') == 'th3s 6s my str15ng'
# vowel_2_index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
# vowel_2_index('') == ''

# Your function should be case insensitive to the vowels.

#Solution:
import re

def vowel_2_index(string):
    return re.sub("[aeiou]",lambda m:str(m.end()),string,0,re.I)

#Other solution(s):
def vowel_2_index(string):
    vowels = 'aeiouAEIOU'
    return ''.join(x if x not in vowels else str(n + 1) for n,x in enumerate(string))