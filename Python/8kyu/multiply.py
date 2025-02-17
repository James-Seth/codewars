#Decribtion:

# This code does not execute properly. Try to figure out why.

#Solution:
def multiply(a, b):
  return a * b

#Other solutions:
def multiply(a, b):
    if isinstance(a, (int, float, complex)):
        if isinstance(b, (int, float, complex)):
            return a * b
  
