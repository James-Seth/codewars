#Describtion:
# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!

# The function takes a name as its only argument, and returns one of the following strings:

# name + " plays banjo" 
# name + " does not play banjo"

# Names given are always valid strings.

#Solution:
def are_you_playing_banjo(name):
    if name.startswith(("r","R")): return f"{name} plays banjo"
    else: return f"{name} does not play banjo"

#Other solutions:
def areYouPlayingBanjo(name):
    if name[0].lower() == 'r':
        return name + ' plays banjo'
    else:
        return name + ' does not play banjo'
