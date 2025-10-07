#Describtion:
# This kata is about converting numbers to their binary or hexadecimal representation:

#     If a number is even, convert it to binary.
#     If a number is odd, convert it to hex.

# Numbers will be positive. The hexadecimal string should be lowercased.

#Solution:
def evens_and_odds(n):
    return hex(n)[2:] if n % 2 else bin(n)[2:]

#Other solution(s):
def evens_and_odds(n):
    return f"{n:x}" if n % 2 else f"{n:b}"