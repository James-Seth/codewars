#Describtion:
# Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

# Note: Booleans should not be considered as numbers.

#Solution:
def cube_odd(arr):
    odd = 0 
    for num in arr:
        if (type(num) != int):
            return None
        if num % 2 != 0:
            odd += num**3
    return odd

#Other solution(s):
def cube_odd(arr):
    return sum( n**3 for n in arr if n % 2 ) if all(type(n) == int for n in arr) else None

#Another:
def cube_odd(arr):
    if len(set(map(type,arr))) < 2:
        return sum(n**3 for n in arr if n%2)