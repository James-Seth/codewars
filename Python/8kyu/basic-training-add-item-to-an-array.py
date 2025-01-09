#Describtion:
# Add the value "codewars" to the websites array.
# After your code executes the websites array should == ["codewars"]

# The websites array has already been defined for you using the following code:

# websites = []

#Solution:
# add the value "codewars" to the already defined websites array
websites.append("codewars")

#Other solutions:
# add the value "codewars" to the already defined websites array
websites.insert(0, "codewars")

#Another:
if 'codewars' not in websites:
    websites.append('codewars')