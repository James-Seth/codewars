#Description
# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

#Solution:
def remove_exclamation_marks(s):
    return s.replace('!', '')

#Other solution(s):
def remove_exclamation_marks(s):
    return ''.join([x for x in s if x != '!'])