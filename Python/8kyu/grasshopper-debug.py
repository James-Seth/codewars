# Description:
# Debug celsius converter

# Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

# Find the errors in the code to get the celsius converter working properly.

# To convert fahrenheit to celsius:

# celsius = (fahrenheit - 32) * (5/9)

# Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

#Sollution:
def weather_info (temp):
    c = convertToCelsius(temp)
    if (c <= 0):
        return (str(c) + " is freezing temperature")
    else:
        return (str(c) + " is above freezing temperature")
    
def convertToCelsius (temperature):
  celsius = (temperature - 32) * (5.0/9.0)
  return celsius

#Other Solution(s):
def weather_info (temp):
    c = convertToCelsius(temp)
    if (c < 0):
        return (str(c) + " is freezing temperature")
    else:
        return (str(c) + " is above freezing temperature")
    
def convertToCelsius (temperature):
  celsius = (temperature - 32) * (5/9.0)
  return celsius