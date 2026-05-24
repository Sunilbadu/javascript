let x = async () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("bipin")
       }, 2000);
    })
}
let y = async () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("**********")
       }, 5000);
    })
}
let z = async () => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve("5")
       }, 7000);
    })
}
const f = async () => {
    console.log("fetching the user")
    let a= await x()
    console.log(a)
    setTimeout(() => {
        
        console.log("fetching the pass word")
    }, 1000);
    let b = await y()
     console.log(b)
    console.log("logging in...")
    let c = await z()

    alert("fetch data sucessful")
}
f()
