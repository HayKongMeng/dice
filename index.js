// var aud =  document.querySelector("#sound").play();
var random1 = Math.floor(Math.random()*6)+1;
// document.querySelector("#sound").play();
var randomDiceImg = "images/dice" + random1 +".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg);

var random2 = Math.random() ;
random2 = random2 * 6;
random2 = Math.floor(random2) + 1;

var randomDiceImg = "images/dice" + random2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg);

if(random1<random2){
    document.querySelector("h1").innerHTML = "Player 2 win!!!";
}else if(random1>random2){
    document.querySelector("h1").innerHTML = "Player 1 win!!!";
    

}else{
    document.querySelector("h1").innerHTML = "Draw";
    
}
// for(var i=0;i<5;i++)
//     document.querySelector("#sound").play();
// index.js
