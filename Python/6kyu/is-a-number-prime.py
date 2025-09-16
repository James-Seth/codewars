#Python:
# Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

# Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
# Requirements

#     You can assume you will be given an integer input.
#     You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
#     NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

# Example

# is_prime(1)  /* false */
# is_prime(2)  /* true  */
# is_prime(-1) /* false */

#Solution:
def is_prime(num):
    if num == 2 or num == 3:
        return True
    if num %2 == 0 or num <2:
        return False
    for n in range(3,int(num**0.5)+1,2):
        if num %n == 0:
            return False
    return True

#Other solution(s):
# This is the Miller-Rabin test for primes, which works for super large n

import random

def even_odd(n):
    s, d = 0, n
    while d % 2 == 0:
          s += 1
          d >>= 1
    return s, d

def Miller_Rabin(a, p):
    s, d = even_odd(p-1)
    a = pow(a, d, p)
    if a == 1: return True
    for i in range(s):
        if a == p-1: return True
        a = pow(a, 2, p)
    return False

def is_prime(p):
    if p == 2: return True
    if p <= 1 or p % 2 == 0: return False
    return all(Miller_Rabin(random.randint(2,p-1),p) for _ in range(40))