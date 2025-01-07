//Description:


//My Solution:
function towerBuilder(nFloors) {
    var space = "";
    var aster = "";
    var tower = [];
    
    for (var i = 1; i <= nFloors; i++) {
      space = (" ").repeat(nFloors - i);
      aster = ("*").repeat((2 * i) - 1);
      tower.push(space + aster + space);
      }
      return tower;
    }

//Other solutions:
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }

//Another one:
function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
  }
