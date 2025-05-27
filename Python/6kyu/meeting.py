#Describtion:
# John has invited some friends. His list is:

# s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

# Could you make a program that

#     makes this string uppercase
#     gives it sorted in alphabetical order by last name.

# When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

# So the result of function meeting(s) will be:

# "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

# It can happen that in two distinct families with the same family name two people have the same first name too.
# Notes

#     You can see another examples in the "Sample tests".

#Solution:
def meeting(s):
     return ''.join(sorted('({1}, {0})'.format(*(x.split(':'))) for x in s.upper().split(';')))

#Other solutions:
def meeting(s):
  s = s.upper()
  s = s.split(';')
  array = []
  string = ""
  for i in s:
    i = i.split(':')
    string = '('+i[1]+', '+i[0]+')'
    array.append(string)
  array.sort()
  output = ""
  for j in array:
    output += j
  return output