#Describtion:
# In this kata you will have to write a function that takes litres and price_per_litre (in dollar) as arguments.

# Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

# Good Luck!
# Note

# 1 Dollar = 100 Cents

#Solution:
def fuel_price(litres, price_per_liter):
    if litres < 2:
        price = litres * price_per_liter;
    elif litres < 4:
        price = litres * (price_per_liter - 0.05);
    elif litres < 6:
        price = litres * (price_per_liter - 0.10);
    elif litres < 8:
        price = litres * (price_per_liter - 0.15);
    elif litres < 10:
        price = litres * (price_per_liter - 0.20);
    else:
        price = litres * (price_per_liter - 0.25);
    return round(price, 2)

#Other solutions:
def fuel_price(litres, price_per_liter):
    discount = int(min(litres, 10)/2) * 5 / 100
    return round((price_per_liter - discount) * litres, 2)