//Describtion:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//My Solution:
var greet = function(name) {
    let names = name.toLowerCase()
    let firstName = names[0].toUpperCase() + names.slice(1)
    return `Hello ${firstName}!`
  };

//Other solutions:
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};