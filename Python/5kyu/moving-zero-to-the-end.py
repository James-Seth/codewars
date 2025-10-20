#Describtion:
# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

#Solution:
def move_zeros(arr):
    new_arr = 0

    for num in arr:
        if not (num == 0 and num is not False):
            arr[new_arr] = num
            new_arr += 1

    while new_arr < len(arr):
        arr[new_arr] = 0
        new_arr += 1

    return arr
                
#Other solutions:
#Best practice, and my favorite solution.
def move_zeros(array):
    for i in array:
        if i == 0:
            array.remove(i) # Remove the element from the array
            array.append(i) # Append the element to the end
    return array