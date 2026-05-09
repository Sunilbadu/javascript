// let name = "sunil"
// let v= name.length
// console.log("the length of the name is "+v)

let college = 'srijana\'s' //note this is the escape sequence
let x= college.length
console.log("the length of the collge is = "+x)

//using the template literals 

let name="sunil datta badu "

console.log(`the name of the student is ${name.replace(name[3],'y')} and he studies in the ${college} college`)

console.log("har\"".length)

let str="Please give me Rs 1000"
let newstr= str.slice(18)
console.log(newstr) //only returns the amount 
let low = str.toLowerCase()
    console.log(low)
