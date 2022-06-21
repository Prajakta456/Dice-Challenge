var n1=Math.random();
var randomN1=Math.floor(n1*6)+1;
//generates random number between 1 to 6

var randomDiceImage1="dice"+randomN1+".png";

var imgsrc1="./images/"+randomDiceImage1;

document.querySelectorAll("img")[0].setAttribute("src",imgsrc1);

var n2=Math.random();
var randomN2=Math.floor(n2*6)+1;

var randomDiceImage2="dice"+randomN2+".png";
var imgsrc2="./images/"+randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",imgsrc2);

if(randomN1>randomN2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomN2>randomN1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}