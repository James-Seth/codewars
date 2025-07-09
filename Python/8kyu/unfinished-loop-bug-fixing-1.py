#Description:
# Unfinished Loop - Bug Fixing #1

# Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

#Solution:
def create_array(n):
    res=[]
    i=1
    while i<=n: 
        res+=[i]
        i += 1
    return res

#Other solution(s):
def create_array(n):
    return [i for i in range(1,n+1)]