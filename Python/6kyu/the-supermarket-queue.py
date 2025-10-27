#Describtion:
# There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
# input

#     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
#     n: a positive integer, the number of checkout tills.

# output

# The function should return an integer, the total time required.
# Important

# Please look at the examples and clarifications below, to ensure you understand the task correctly :)
# Examples

# queue_time([5,3,4], 1)
# # should return 12
# # because when n=1, the total time is just the sum of the times

# queue_time([10,2,3,3], 2)
# # should return 10
# # because here n=2 and the 2nd, 3rd, and 4th people in the 
# # queue finish before the 1st person has finished.

# queue_time([2,3,10], 2)
# # should return 12

# Clarifications

#     There is only ONE queue serving many tills, and
#     The order of the queue NEVER changes, and
#     The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

# N.B. You should assume that all the test input will be valid, as specified above.

# P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

#Solution:
def queue_time(customers, n):
    # Create a list of n zeros representing empty tills
    tills = [0] * n
    # Iterate through each customer's service time
    for customer in customers:
        # Find the index of the till with minimum time, then add customer time to that till
        tills[tills.index(min(tills))] += customer
    # Return the maximum time from all tills
    return max(tills)

#Other solutions:
def queue_time(customers, n):
    # Initialize list of n tills using list comprehension
    tills = [0 for i in range(n)]
    # Loop through each customer's time
    for time in customers:
        # Get the index of the till with the smallest current time
        min_index = tills.index(min(tills))
        # Add the customer's time to that till
        tills[min_index] += time
    # Return the highest total time among all tills
    return max(tills)

#Another solution:
import heapq

def queue_time(customers, n):
    # Create a heap (min-heap) with n zeros
    heap = [0] * n
    # Process each customer's time
    for time in customers:
        # Replace the smallest element (root) with root + customer time, maintaining heap property
        heapq.heapreplace(heap, heap[0] + time)
    # Return the largest value in the heap
    return max(heap)