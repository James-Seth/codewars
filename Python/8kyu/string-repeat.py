#Describtion:
# Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
# Examples (input -> output)

# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"

#Solution:
def repeat_str(repeat, string):
    return string * repeat

#Other solutions:
repeat_str = lambda r, s: s * r