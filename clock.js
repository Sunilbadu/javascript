let y =setInterval(time=>{
    let x = new Date
    let ho = x.getHours(x)
    let mi = x.getMinutes(x)
    let sec = x.getSeconds(x)
    document.getElementById("h").innerHTML=ho+" :"
    document.getElementById("m").innerHTML=mi+" :"
    document.getElementById("s").innerHTML=sec
    
},500)
// let z =setInterval(time=>{
//     // document.getElementsByClassName("off")[0].classList.toggle("clock")
//     document.getElementById("clock2").classList.toggle("off")
// },500)
let q =setInterval(time=>{
    document.getElementById("sec").classList.toggle("xx")
    
},500)
// let rw =setInterval(time=>{
//     document.getElementById("hour").classList.toggle("xx")
    
// },500)
// let qw =setInterval(time=>{
//     document.getElementById("min").classList.toggle("xx")
    
// },500)

