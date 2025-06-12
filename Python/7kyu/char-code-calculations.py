#Describtion:
# Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

# 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

# Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

# total1 = 656667
#               ^
# total2 = 656661
#               ^

# Then return the difference between the sum of the digits in total1 and total2:

#   (6 + 5 + 6 + 6 + 6 + 7)
# - (6 + 5 + 6 + 6 + 6 + 1)
# -------------------------
#                        6

# Fundamentals
# Arrays
# Strings
# Mathematics

#Solution:
def calc(x):
    return ''.join(str(ord(ch)) for ch in x).count('7') * 6

#Other solution(s):
def calc(s):
    total1 = ''.join(map(lambda c: str(ord(c)), s))
    total2 = total1.replace('7', '1')
    return sum(map(int, total1)) - sum(map(int, total2))