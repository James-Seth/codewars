//Describtion:

//My Solution:
function rowWeights(array){
    let a = [];
    let b = [];
      for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
         a.push(array[i]);
      } else {
         b.push(array[i]);
      }
  }
      return [a.reduce((a,b) => a + b, 0), b.reduce((a,b) => a + b, 0)];
  }

//Other solutions:
function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }
//Another one:
rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])