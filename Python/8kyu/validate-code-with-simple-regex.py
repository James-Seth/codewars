#Describtion:
# Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

# You can assume the input will always be a number.

#Solution:
def validate_code(code):
    return str(code).startswith(("1", "2", "3"))

#Other soltions:
def validate_code(code):
    import re
    return bool(re.match(r"^[123]\d*$",str(code)))

#Another:
def validate_code(code):
    import re
    return bool(re.match(r"^[123]\d*$",str(code)))