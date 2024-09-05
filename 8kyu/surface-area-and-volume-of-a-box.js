//Describtion:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//My Solution:
function getSize(width, height, depth){
    let volume = width * height * depth;
    let area = 2 * (height * width) + 2 * (height * depth) + 2 * (width * depth);
    return [area, volume];
  }

//Other solutions:
function getSize(width, height, depth){
    var box = { width: width, height:height, depth:depth};
    
    return [getArea(box), getVolume(box)];
  }
  
  
  function getArea(box){
    return (2 * (box.depth * box.height)) + (2 * (box.width * box.height)) + (2 * (box.width * box.depth));
  }
  
  function getVolume(box){
    return box.width * box.height * box.depth;
  }