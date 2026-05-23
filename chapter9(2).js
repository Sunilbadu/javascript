  let x =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("error 404"))
        }, 3000)}
  )} 
  let a = async () => {
    try {
        let c = await x()
        console.log(c)
        
    } catch (error) {
        console.log(error)
        setTimeout(() => {
            alert("addresed")
        }, 2000);
    }
  }
  a()


  
 