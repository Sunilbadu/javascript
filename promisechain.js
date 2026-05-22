let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("resolved after 2 sec")
        resolve(56)
    }, 2000);
})
p1.then((value)=>{
    let p2 = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log(value)
             resolve("promise 2")
        },2000)
       
    })
    return p2
}).then((value)=>{
    let q = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                console.log("we are done "+value)
                resolve(55)
            },2000)
     
    })
    return q
}).then((value)=>{
    let y= new Promise((resolve , reject)=>{
         setTimeout(()=>{
        console.log("we ARE PAKKA DONE with the final value of "+value)
        reject(new Error(404))
    },2000)
    })
   return y
    
}).catch((value)=>{


        console.log(value)
  
})