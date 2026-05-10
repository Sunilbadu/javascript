let arr = [1, 2, 3, 4, 5, 6, 7]
// let a = Number.parseInt(prompt("enter a number "))
var a
do {
    a = Number.parseInt(prompt("enter a number "))
    if( a !== 0) { arr.push(a) }

   
} while (a != 0)
 console.log(arr)

 let arr2 = arr.filter((x)=>{
    if (x % 10 == 0){
        return x
    }
 })
  console.log(arr2)

  let arr3 = arr.map((y)=>{
    return y*y
  })
  console.log(arr3)

let arr=[]
let x = prompt("enter a  number whose factorial is to be calculated")
    for(let i=0;i<x; i++){
        arr[i]=i+1
    }
let red = arr.reduce((x,y)=>{
    return x*y;
})
console.log(`the factorial of ${x} is ${red}`)