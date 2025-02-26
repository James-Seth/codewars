#Describtion:

#Solution:
def count_positives_sum_negatives(arr):
    n = (sum(num for num in arr if num < 0))
    
    x = 0
    
    for num in arr:
        if num > 0:
            x += 1
    
    if arr == []:
        return arr
    
    return [x, n]
    
#Other solutions:
def count_positives_sum_negatives(arr):
    if not arr: return []
    pos = 0
    neg = 0
    for x in arr:
      if x > 0:
          pos += 1
      if x < 0:
          neg += x
    return [pos, neg]