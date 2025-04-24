#Describtion:
# Your function takes two arguments:

#     current father's age (years)
#     current age of his son (years)

# Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

#Solution:
def twice_as_old(dad_years_old, son_years_old):
    return abs(dad_years_old - 2*son_years_old)

#Other solutions:
def twice_as_old(dad_years_old, son_years_old):
    count = 0
    if son_years_old == 0:
        return dad_years_old
    elif dad_years_old / son_years_old > 2:
        while son_years_old * 2 != dad_years_old:
            dad_years_old += 1
            son_years_old += 1
            count += 1
        return count
    elif dad_years_old / son_years_old < 2:
        while son_years_old != 0 and son_years_old * 2 != dad_years_old:
            dad_years_old -= 1
            son_years_old -= 1
            count += 1
        return count
    else:
        return 0