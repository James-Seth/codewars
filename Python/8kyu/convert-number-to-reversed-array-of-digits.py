#Descrbition:
# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
# Example (Input => Output):

# 35231 => [1,3,2,5,3]
# 0     => [0]

#Solution:
def digitize(n):
    return [int(x) for x in reversed(str(n))] 

#Other solutions:
def digitize(n):
    return [int(x) for x in str(n)[::-1]]