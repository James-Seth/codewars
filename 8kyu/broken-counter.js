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
public class Counter
{
  private int _value;
  public int Value
  {
      get => _value;
      private set => _value = value;
  }
  
  public void Increase() => Value++;
  public void Reset() => Value = 0;
}
