#Describtion:
# Terminal game bug squashing

# You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

# You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

# - `combat`
# - `buy_health`
# - `get_coins`
# - `print_status`
# - `roll_dice`
# - `move`

#Solution:
from preloaded import *

health = 100
position = 0
coins = 0

def main():
    roll_dice()
    move()
    combat()
    get_coins()
    buy_health()
    print_status()

#Other solutions:
health, position, coins = 100, 0, 0
log = 'roll_dice move combat get_coins buy_health print_status'.split(' ')

def main(): pass
