#Describtion:
# There is a common problem given to interviewees in software, called FizzBuzz. It works as follows: for the numbers between 1 and 100, print "fizz" if it is a multiple of 3 and "buzz" if it is a mutiple of 5, else print the number itself.

# You are in an interview and they ask you to complete fizzbuzz (which can be done in a one-liner in a few langs) and you knock it out of the park.
# Task

# Surprised by your ability, the interviewer gives you a harder problem. Given a list of coprime numbers, (that is that the greatest common divisor of all the numbers = 1) and an equally sized list of words, compute its fizzbuzz representation up until the pattern of strings repeats itself.

# Notes:

#     Your function should return a list/array, not print it.
#     The list of numbers should start from 1.
#     The strings are always concatenated from left to right in the appearance of the given list of words.
#     The list of numbers may not always be sorted - just use the given order of the numbers.
#     All numbers in the first array will always be coprime. This is a safe assumption for your program.
#     The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat after this point.

# Hint: What is the relation to the numbers given in the list and the length of the list?
# Example

# fizzbuzz_plusplus([2, 3, 5], ['fizz', 'buzz', 'bazz'])

# should return

# [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']

#Solution:
def fizzbuzz_plusplus(nums, words):
    res, tmp, n = [], '', 0
    while tmp != ''.join(words):
        n += 1
        res.append((tmp := ''.join(words[i] for i, x in enumerate(nums) if not n % x)) or n)
    return res

#Other solution(s):
from functools import reduce

def fizzbuzz_plusplus(nums, words):
    return ["".join(w for n, w in zip(nums, words) if not i % n) or i
            for i in range(1, reduce(lambda a, b: a * b, nums, 1) + 1)]

#Another one:
from functools import reduce
from operator import mul
def fizzbuzz_plusplus(nums, words):
  return [''.join(word for num, word in zip(nums, words) if i % num == 0) or i
      for i in range(1, reduce(mul, nums) + 1)]