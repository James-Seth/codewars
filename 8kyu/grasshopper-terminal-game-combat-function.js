//Describtion:
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

//My Solution:
combat = (health, damage) => damage > health? 0: health - damage

//Other solutions:
function combat(health, damage) {
    return Math.max(health - damage, 0);
  }