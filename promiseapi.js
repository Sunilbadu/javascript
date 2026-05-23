let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error("value1"))
    }, 1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value2")
    }, 2000);
})

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("value")
//     }, 3000);
// })
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(new Error ("value"))    //if reject then .all chaldena
    }, 3000);
})


// let x = Promise.all([p1,  p2, p3])
// x.then((value)=>{
//     console.log(value) //we get the value of all promises in the form of array and it executes in the max
// })

// let x = Promise.allSettled([p1,p2,p3])
// x.then((value)=>{
//     console.log(value)
// })

// let x = Promise.race([p1,p2,p3])
// x.then((value)=>{
//     console.log(value)
// })

let x = Promise.any([p1,p2,p3])
x.then((value)=>{
    console.log(value)
})