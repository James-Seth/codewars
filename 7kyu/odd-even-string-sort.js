//Describtion:
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

//My Solution:
function sortMyString(S){
    let even = ''
    let odd = ''
    for(i = 0; i < S.length; i++){
      if(i % 2 === 0){
         odd += S[i]
         }else{
           even += S[i]
         }
    }
    return odd + ' ' + even
  }

//Other solutions:
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}

//Another one:
const sortMyString=s=>s.split("").reduce((a,b,i)=>i%2?[a[0],a[1]+b]:[a[0]+b,a[1]],["",""]).join(" ")