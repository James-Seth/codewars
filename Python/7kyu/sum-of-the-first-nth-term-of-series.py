#Describion:
# Task

# Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).
# Series:1+14+17+110+113+116+…\mathrm{Series:}\quad 1 + \frac14 + \frac17 + \frac1{10} + \frac1{13} + \frac1{16} + \dotsSeries:1+41​+71​+101​+131​+161​+…

# You will need to figure out the rule of the series to complete this.
# Rules

#     You need to round the answer to 2 decimal places and return it as String.

#     If the given value is 0 then it should return "0.00".

#     You will only be given Natural Numbers as arguments.

# Examples (Input --> Output)

# n
# 1 --> 1 --> "1.00"
# 2 --> 1 + 1/4 --> "1.25"
# 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

#Solution:
def series_sum(n):
    return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))

#Other solutions:
def series_sum(n):
    sum = 0.0
    for i in range(0, n):
        sum += 1 / (1 + 3 * float(i))
    return '%.2f' % sum