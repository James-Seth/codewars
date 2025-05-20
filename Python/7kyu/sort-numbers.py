#Describtion:

#Solutions:
def solution(nums):
    return [] if nums == None else sorted(nums) 

#Other solutions:
def solution(nums):
    return sorted(nums) if nums else []

#Another:
def solution(nums):
    return sorted(nums or [])