#Describtion:
# We need a function that receives two arrays, each of them with elements that occur only once. We need to know:

#     Number of elements that are present in both arrays
#     Number of elements that are present in only one array
#     Number of remaining elements in arr1 after extracting the elements of arr2
#     Number of remaining elements in arr2 after extracting the elements of arr1

# Example

# arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# arr2 = [2, 4, 6, 8, 10, 12, 14]

# The result is: [4, 8, 5, 3]

#     4 elements present in both arrays: 2, 4, 6, 8
#     8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
#     5 elements remaning in arr1: 1, 3, 5, 7, 9
#     3 elements remaning in arr2: 10, 12, 14

# No doubt, an easy kata to warm up before doing the more complex ones. Enjoy it!

#Solution:
process_2arrays = lambda a, b: [
    # Set intersection efficiently finds elements present in both arrays.
    len(set(a) & set(b)),
    # Symmetric difference counts elements unique to either array.
    len(set(a) ^ set(b)),
    # Set difference isolates elements remaining in the first array after removing those from the second.
    len(set(a) - set(b)),
    # Likewise, set difference for the second array after removing those from the first.
    len(set(b) - set(a))
]

#Other solutions:
def process_2arrays(arr1, arr2):
    # Convert lists to sets to enable efficient comparison and ensure uniqueness.
    s1, s2 = set(arr1), set(arr2)
    # Use set operations to compute the required counts for each condition.
    return [
        len(s1 & s2),      # Elements present in both arrays.
        len(s1 ^ s2),      # Elements present in only one array.
        len(s1 - s2),      # Elements remaining in arr1 after removing those from arr2.
        len(s2 - s1)       # Elements remaining in arr2 after removing those from arr1.
    ]