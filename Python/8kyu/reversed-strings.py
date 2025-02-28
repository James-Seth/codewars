#Describtion:
# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

#Solution:
def solution(string):
    return string[::-1]

#Other solution(s):
def solution(string):
    temp = list(string)
    temp.reverse()
    return ''.join(temp)
