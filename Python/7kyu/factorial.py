#Describtion:

#Solution:
def factorial(n):
    # First, we check if the input is outside the valid range.
    if n < 0 or n > 12:
        # If it is, we raise a ValueError to signal invalid input.
        raise ValueError()
    # Otherwise, we initialize the result variable to 1 to start the calculation.
    result = 1
    # Next, we loop through numbers from 1 to n (inclusive),
    for i in range(1, n + 1):
        # multiplying the result by the current number each time.
        result *= i
    # After finishing the loop, we return the calculated factorial value.
    return result

#Other solutions:
#Best practice 
def factorial(n):
    # We begin by checking if the input is outside the valid range.
    if n < 0 or n > 12:
        # If so, we raise a ValueError to indicate invalid input.
        raise ValueError
    # If the input is valid, we use a base case for n <= 1 to return 1,
    # otherwise, we recursively calculate n * factorial(n-1).
    return 1 if n <= 1 else n*factorial(n-1)