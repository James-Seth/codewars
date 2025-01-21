#Describtion:

#Solution:
def sorter(textbooks):
    return sorted(textbooks, key=str.lower)

#Other solitions:
def sorter(textbooks):
    return sorted(textbooks, key=str.casefold)    