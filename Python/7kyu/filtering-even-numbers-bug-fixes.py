#Describtion:
# The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.

# However, there is a bug in the method that needs to be resolved.

#Solution:
def kata_13_december(lst): 
    for i in range(len(lst)-1, -1, -1): 
        if lst[i] % 2 == 0: 
            del lst[i]
    return lst

#Other solution(s):
def kata_13_december(lst): 
    new = list()
    for i in range(len(lst)): 
        if lst[i] % 2 != 0: 
            new.append(lst[i])
    return new
