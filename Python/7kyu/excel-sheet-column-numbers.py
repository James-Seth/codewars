#Describtion:
# Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.

# All column titles will be uppercase.

# Examples:

# Column title: "A" --> return 1
# Column title: "Z" --> return 26
# Column title: "AA" --> return 27

#Solutions:
def title_to_number(title):
    return sum((ord(char) - 64) * 26 ** i for i, char in enumerate(title[::-1]))
     
#Other solutions:
def title_to_number(title):
    ret = 0
    for i in title:
        ret = ret*26 + ord(i) - 64
    return ret