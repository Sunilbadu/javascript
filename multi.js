let p1 = new Promise((resolve , reject)=>{
    setTimeout(() => {
        alert("fetch data sucessful...")
        resolve(1)
    }, 2000);
})

p1.then(() =>{
    setTimeout(() => {
        
        console.log("hurrah......!")
    }, 2000);
})

p1.then((value)=>{
    setTimeout(() => {
        console.log(value)
        
    }, 2000);
})
