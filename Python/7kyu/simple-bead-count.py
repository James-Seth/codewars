#Describtion:
# Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

# @ @@ @ @@ @ @@ @ @@ @ @@ @

# Implement a function returning the number of red beads.
# If there are less than 2 blue beads return 0. 

#Solution:
def count_red_beads(n): 
    if(n<2):
        return 0
    return (n-1)*2

#Other solutions:
def count_red_beads(nb):
    return max(0, 2 * (nb - 1) )