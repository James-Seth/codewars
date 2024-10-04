//Describtion:
// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

//My Solution:
function capitalize(s,arr){
  
    var capS = s.split("");
    
    for(var i = 0; i < arr.length; i++) {
      if(capS[arr[i]]) {
        capS[arr[i]] = capS[arr[i]].toUpperCase();
      }
    }
    
    capS = capS.join("");
    return capS
    };

//Other solutions:
var Ghost = function() {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
  };