#Describtion:
# A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair of numerical coordinates, which are the signed distances to the point from two fixed perpendicular directed lines, measured in the same unit of length.

# The сoordinates of a point in the grid are written as (x,y). Each point in a coordinate system has eight neighboring points. Provided that the grid step = 1.

# It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all the neighboring points. Points inside your returned list need not be sorted (any order is valid).

# For Example:

# * Given x = 2 and y = 2, the function should return [(1,1),(1,2),(1,3),(2,1),(2,3),(3,1),(3,2),(3,3)];
# * Given x = 5 and y = 7, the function should return [(6,7),(6,6),(6,8),(4,7),(4,6),(4,8),(5,6),(5,8)].

# Note that the required data structure to contain the coordinates might not be the same between translations, so check the sample test cases provided.

#Solution:
def cartesian_neighbor(x,y):
    return [(a,b) for a in range(x-1,x+2) for b in range(y-1,y+2) if (a,b) != (x,y)]

#Other solution(s):
def cartesian_neighbor(x,y):
    arr = []
    for i in range(x-1, x+2):
        for j in range(y-1, y+2):
            if (i,j) != (x,y):
                arr.append((i,j))
    return(arr)