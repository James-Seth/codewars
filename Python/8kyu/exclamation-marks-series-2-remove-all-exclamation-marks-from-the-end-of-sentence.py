#Describtion:

#Solution:
def remove(st):
    return st.rstrip("!")

#Other solutions:
def remove(s):
    while s and s[-1] == "!":
        s = s[:-1]
    return s
    