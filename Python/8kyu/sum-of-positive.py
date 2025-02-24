#Describtion:
# Task

# You get an array of numbers, return the sum of all of the positives ones.
# Example

#     [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

# Note

# If there is nothing to sum, the sum is default to 0.

#Solution:
def positive_sum(arr):
    x = []
    for num in arr:
        if num > 0:
            x.append(num)
            
    return sum(x)

#Other solutions: