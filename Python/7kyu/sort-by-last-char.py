#Describtion:
# Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

# If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

# All inputs will be valid.

#Solution:
def last(s):
    return sorted(s.split(), key=lambda x: x[-1])

#Other solutions:
last=lambda x: sorted(x.split(), key=lambda i: i[-1])