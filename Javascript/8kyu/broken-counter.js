//Describtion:
// Our counter prototype is broken. Can you spot, what's wrong here?

// Counter.Value must have manually defined getter/setter methods, according to our company's style guide.

//My Solution:
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};

//Other solutions:
class Counter {
	constructor() {
  	this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}