let input='Wow Mom Wow'
let check=" "
console.log("The original sentence is :"+input)
let input1=input.toLowerCase()
console.log("The sentence is :"+input1)
let input2=input1.split("").reverse().join('')
console.log("The sentence after reverse is :"+input2)
// for(let i=input2.length-1;i>=0;i--)
// {
//      check=check+input2[i]
// }
// console.log("The sentence after reversing is :"+check)
if(input1 === input2)
{
    console.log("It is a Palinrome")
}
else
console.log("not a palindrome")