#Describtion:
# You might know some pretty large perfect squares. But what about the NEXT one?

# Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

# If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
# Examples ( Input --> Output )

# 121 --> 144
# 625 --> 676
# 114 --> -1  #  because 114 is not a perfect square

#Solution:
def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1)**2
    return -1

#Other solution(s):
def find_next_square(sq):
    x = sq**0.5    
    return -1 if x % 1 else (x+1)**2
