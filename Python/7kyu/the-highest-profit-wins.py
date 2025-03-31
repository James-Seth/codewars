#Describtion:

#Solution:
def min_max(lst):
    return [min(lst), max(lst)]

#Other solutions:
def min_max(lst):
  min, max = lst[0], lst[0]
  
  for x in lst:
    if x > max:
      max = x
    elif x < min:
      min = x
  
  return [min, max]