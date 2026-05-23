const loadscript = async (src)=>{
    return new Promise((resolve, reject) => {
       let script = document.createElement("script")
    script.src = src
    script.onload = ()=>{
        resolve(src)
    }
    document.head.append(script)
})
}

let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
a.then((value)=>{
    alert(value+"  script added")
})
a.catch(()=>{
    console.error("error occured");
    
})
// let main2 = async () => {
//     let a =  await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
//     console.log(a)

// }
// main2()







