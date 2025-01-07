//Describtion:
// Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Your answer should be accurate within 0.01 kpl.

// Some useful associations relevant to this kata:

//     1 Imperial Gallon = 4.54609188 litres
//     1 Mile = 1.609344 kilometres

//Solution:
function converter (mpg) {
    return Math.round(mpg / 4.54609188 * 1.609344 * 100) / 100
  }

//Other solutions:
var LITRES_PER_GALLON = 4.54609188;
var KILOMETERS_PER_MILE = 1.609344;
function converter (mpg) {
  return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
}