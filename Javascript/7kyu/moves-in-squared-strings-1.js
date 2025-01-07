//Describtion:
// function vertMirror(str) {
//     return str.split('\n')
//       .map(line => line.split('').reverse().join(''))
//       .join('\n')
// }
// function horMirror(str) {
//     return str.split('\n')
//       .reverse()
//       .join('\n')
// }
// function oper(fct, s) {
//     return fct(s)
// }

//My Solution:
const vertMirror = (str) => str.map(e => [...e].reverse().join(''))

const horMirror = (str) => str.reverse()

const oper = (fct, s) => fct(s.split('\n')).join('\n')

//Other solutions:
const vertMirror = strng =>
    [...strng].map(val => [...val].reverse().join(``));
  
  const horMirror = strng =>
    [...strng].reverse();
  
  const oper = (fct, s) =>
    fct(s.split(`\n`)).join(`\n`);