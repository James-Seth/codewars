#Describtion:
# *** No Loops Allowed ***

# You will be given an array and a limit value, you must check that all values in the array are less than or equal to limit. If they all are, return true. Else, return false.

# You can assume all values in the array are numbers.

# Do not use loops. Do not modify input array.

#Solution:
def small_enough(a, limit): 
    return max(a) <= limit

#Other solution(s):
def small_enough(a, limit): 
    return all(map(lambda x: x <= limit, a))

