#Describtion:
# Your Task

# Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
# Examples

#     booleans = [True, True, False], operator = "AND"

#     True AND True -> True
#     True AND False -> False
#     return False

#     booleans = [True, True, False], operator = "OR"

#     True OR True -> True
#     True OR False -> True
#     return True

#     booleans = [True, True, False], operator = "XOR"

#     True XOR True -> False
#     False XOR False -> False
#     return False

# Input

#     an array of Boolean values (1 <= array_length <= 50)
#     a string specifying a logical operator: "AND", "OR", "XOR"

# Output

# A Boolean value (True or False).

#Solution:
def logical_calc(array, op):
    res = array[0]
    for i in array[1:]:
        if op == 'AND':
            res = res and i
        elif op == 'OR':
            res = res or i
        elif op == 'XOR':
            res = res != i
    return res

#Others solution:
def logical_calc(array, op):
    res = array[0]
    for x in array[1:]:
        if op == "AND":
            res &= x
        elif op == "OR":
            res |= x
        else:
            res ^= x
        
    return res #boolean
    