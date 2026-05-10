var again
do{
    let a = Number.parseInt(prompt("enter you age","18"))
    if(a<0){
        console.error("please enter a valid age");
        break;
        
    }
    if(a === 4){
        location.href = "https://www.google.com"
    }
let x = (a>18) ? console.log("you can drive") : console.log("you cannot drive")
let y = confirm("do you want to dee this again")
if(y){
    again = true
}
else{
    again = false
}
}while(again == true)

    let coloe = prompt("enter the baackground color you like?")
    document.body.style.backgroundColor  = coloe