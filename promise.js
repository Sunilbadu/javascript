// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = { id: 1, name: "Sunil" };
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData()
//   .then(response => {
//     console.log("Data received:", response);
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });


// let x = new Promise(function(resolve,reject){
//   // alert("welcome")
//   resolve(56)
  
// })

// console.log("hello 1")
// setTimeout(function(){
//   console.log("my name is sunil")
  
// },2000)
// console.log("hello 3")
// console.log(x)




 let x1 = new Promise((resolve,reject)=>{
   console.log("fetching the data...")
   setTimeout(function(){
    //  console.error("fetch data unsucessful")
     //  resolve(88)
     reject(new Error("iam an error"))
    //  console.log(x1)
    },5000)
  })
  // console.log(x1)
  
  let x2 = new Promise((resolve,reject)=>{
    console.log("fetching the data...")
    setTimeout(function(){
      resolve(88)
      console.log("fetched the data sucessfully")
      // reject(new Error("iam an error"))
    //  console.log(x2)
    },5000)
  })
  // console.log(x2)

  x2.then((value)=>{
    console.log(value)
  })
    x1.catch((error)=>{
    console.log("some error occureed iun the p1")
  })