#Describtion:
# Complete the solution so that the function will break up camel casing, using a space between words.
# Example

# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

#Solution:
def solution(s):
     string = ''
     for letter in s:
          if letter != letter.upper():
               string += letter
          if letter == letter.upper():
               string += " " + letter
          return string 
          
#Other solutions:
def solution(s):
    return ''.join(' ' + c if c.isupper() else c for c in s)

#Another:
import re
def solution(s):
    return re.sub('([A-Z])', r' \1', s)