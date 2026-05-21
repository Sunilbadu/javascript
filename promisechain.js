let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("resilved after 2 sec")
        resolve(56)
    }, 2000);
})
p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve , reject)=>{
        setTimeout(()=>{
             resolve("promise2")
        },2000)
       
    })
    return p2
}).then((value)=>{
    console.log("we are done "+value)
    let q = new Promise((resolve, reject)=>{
            setInterval(()=>{
                resolve(55)
            },2000)
            return q   //error occureed
    })
}).then((value)=>{
    console.log("we ARE PAKKA DONE with the final value of "+value)
})