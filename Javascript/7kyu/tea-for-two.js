//Describtion:

//My Solution:
function tea42(input){
    return input.toString().replace(/2/g, 't')
}

//Other solutions:
function tea42(input){
    return String(input).replace(/2/g, 't')
}

//Another one:
const tea42 = input =>
    `${input}`.replace(/2/g, `t`);