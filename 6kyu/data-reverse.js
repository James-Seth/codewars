//Describtion:
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

//My Solution:
const dataReverse = function(data){
    if (data.length === 0){
      return []
    } 
    const x = [];
    const segment = data.length / 8;
    
    for (var i = 0; i < segment; i++){
      x.push(data.splice(0,8));
    }
    return x.reverse().join().split(',').map(v => v * 1);
  }

//Other solutions:
function dataReverse(data) {
    let a = [];
    while (data.length)
      a.unshift(...data.splice(0, 8));
    return a;
  }

//Another one:
const dataReverse = data => {
    const bytes = [];
    for (let i = 0; i < data.length; i += 8) {
      bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
  };