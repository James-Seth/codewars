#Describtion:
# Complete the square sum function so that it squares each number passed into it and then sums the results together.

# For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

#Solution:
def square_sum(numbers):
    return sum(x ** 2 for x in numbers)

#Other solutions:
def square_sum(numbers):
	res = 0
	for num in numbers:
   		res = res + num*num
	return res