//Describtion:
// Bob needs a fast way to calculate the volume of a cuboid with 
// three values: the length, width and height of the cuboid. 
// Write a function to help Bob with this calculation.

//My Solution:
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      let cube = length * width * height;
      return cube;
    }
  }

//Other Solution:
const Kata = {
    getVolumeOfCuboid : (length, width, height) => length * width * height
  }

//Another one:
class Kata {
    static getVolumeOfCuboid(l, w, h) {
      return l * w * h;
    }
  };