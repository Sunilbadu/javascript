const comp = ["s","w","g"]
var bot = 0
var user = 0
var c3 = 0
do{
    c3+=1
let ran = comp[Math.floor(Math.random() * 3)]
let pl = prompt("enter your choice \"s or w or g \"")
if(pl == "s" ){
    if(ran == "w"){
        alert("you won the round"+"BOT CHOICE"+ran)
        user+=1
    }
    else if( ran =="g"){
        alert("you loose the round"+"BOT CHOICE"+ran)
        bot+=1
    }
    else {
        alert("drawwwww"+"BOT CHOICE"+ran)
    }
}
if (pl == "w"){
    if(ran == "g"){
        alert("you won the round "+"BOT CHOICE"+ran)
        user+=1
    }
    else if( ran =="s"){
        alert("you loose the round"+"BOT CHOICE"+ran)
        bot+=1
    }
    else {
        alert("drawwwww"+"BOT CHOICE"+ran)
    }
}
if(pl == "g"){
    if(ran == "s"){
        alert("you won the round"+"BOT CHOICE"+ran)
        user+=1
    }
    else if( ran =="w"){
        alert("you loose the round"+"BOT CHOICE"+ran)
        bot+=1
    }
    else {
        alert("drawwwww"+"BOT CHOICE"+ran)
    }
}
var ch = confirm("do you want to play again")
}while(ch == true)
    var final
    if(user >= bot){
    final = "win" 
}
else{
    final = "loose"
}
alert(`you played ${c3} round and you ${final} you-bot(${user}-${bot})`)