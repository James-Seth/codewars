#Describtion:
# Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

# (the dedicated builtin(s) functionalities are deactivated)

#Solution:
def reverse(lst):
    out = list()
    for i in range(len(lst)-1,-1,-1):
        out.append(lst[i])
    return out

#Other solution(s):
def reverse(lst):
    empty_list = list()            # use this!
    result = list()
    while lst:
        result.append(lst.pop())
    return result