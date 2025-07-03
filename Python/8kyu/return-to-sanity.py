#Describtion:
# This function should return an object, but it's not doing what's intended. What's wrong?

#Solution:
def mystery():
    results = {
    'sanity': 'Hello'}
    return results

#Other solution(s):
def mystery():
    return {'sanity': 'Hello'}