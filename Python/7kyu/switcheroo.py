#Describiton:
# Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

# Example:

# 'acb' --> 'bca'
# 'aabacbaa' --> 'bbabcabb'

#Solution:
def switcheroo(s):
    result = ''
    for char in s:
        if char == 'a':
            result += 'b'
        elif char == 'b':
            result += 'a'
        else:
            result += char  
    return result

#Other solution(s):
def switcheroo(s):
    return s.translate(str.maketrans('ab', 'ba'))
