#Describtion:
# In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

# The order is: uppercase letters, lowercase letters, numbers and special characters.

# "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

# More examples in the test cases.

# Good luck!

#Solution:
def solve(s):
    res = [0, 0, 0, 0]
    for c in s:
        i = 0 if c.isupper() else 1 if c.islower() else 2 if c.isdigit() else 3
        res[i] += 1
    return res

#Other solution(s):
