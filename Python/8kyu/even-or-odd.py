#Describtion:
# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

#Solution:
def even_or_odd(number):
    return "Even" if number % 2 == 0 else "Odd"

#Other solutions:
def even_or_odd(number):
  if number % 2 == 0:
    return "Even"
  else:
    return "Odd"