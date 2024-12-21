const buttons = document.getElementsByTagName("button")
const song = document.getElementById("song")
const numbers = document.getElementsByClassName("number")
const operators = document .getElementsByClassName("operator")
const screen = document .getElementById("screen")
let result=""
let lastIsOperator = false
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",playSong)

}

for(i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",getNumber)

}
for(i=0;i<operators.length;i++){
    operators[i].addEventListener("click",getoperator)
}
function playSong(){
    song.play()
    
}
function getNumber(event){
    result= result+event.target.innerText
    screen.innerText= result
   
}
function getoperator(event){
    if(lastIsOperator==false){
    result= result+event.target.innerText
    screen.innerText= result
    lastIsOperator= true
}
}
console.log(screen)
