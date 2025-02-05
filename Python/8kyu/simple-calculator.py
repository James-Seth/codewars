#Describtion:
# You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

# Your function will accept three arguments:
# The first and second argument should be numbers.
# The third argument should represent a sign indicating the operation to perform on these two numbers.

# if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
# Example:

# calculator(1, 2, '+') => 3
# calculator(1, 2, '$') # result will be "unknown value"

# Good luck!

#My solution:
def calculator(x,y,op):
    if type(x) != int:
        return "unknown value"
    if type(y) != int:
        return "unknown value"
    if op == "+":
        return x + y
    elif op == "-":
        return x - y
    elif op == "*":
        return x * y
    elif op == "/":
        return x / y
    else:
        return "unknown value"

#Other solutions:
def calculator(x, y, op):
  return eval(f'{x}{op}{y}') if type(x) == type(y) == int and str(op) in '+-*/' else 'unknown value'

#Another one:
def calculator(x, y, op):
    try:
        return {'+': x + y, '-': x - y, '*': x * y, '/': x / y}[op]
    except (TypeError, KeyError): 
        return 'unknown value'