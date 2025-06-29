

let gameseq=[];   
let userseq=[];

let btns=["yellow","purple","red","green"];
let started=false;
let level=0;
let highscore=0;
let h2=document.querySelector("h2");


//the below function is used to enter any key from keyboard
document.addEventListener("keypress",function(){
    if(started == false)
    {
        started=true;
    }
    levelup();
});

//the below function is used to glow the color
function btnflas(btn){
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
} 
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },250);
} 

//this function is used to to level up and picking the random color
function levelup(){
    userseq=[];
    level++;
  h2.innerText=`level ${level}`;

  let randomindex=Math.floor(Math.random()*4);
 let randomcolor=btns[randomindex];
 let randombtn=document.querySelector(`.${randomcolor}`);
 gameseq.push(randomcolor);
   btnflas(randombtn);
}

function checkans( index){
  if(userseq[index]===gameseq[index])
  {
    if(userseq.length==gameseq.length)
    {
         setTimeout(levelup,1000);
    }
  }
  else{
    h2.innerText=`game over press any to start and Ur score is ${level}`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";

    },250);
    var h8=document.querySelector(".high");
    if(highscore<level){
        highscore=level;
    }
   h8.innerText=`high score is ${highscore}`;
//    h8.classList.add("h2");
//    document.querySelector("body").appendChild(h8);
    reset();
  }
}

function btnpress(){
   let btn=this;
   userflash(btn);

let usercolor=btn.getAttribute("id");
userseq.push(usercolor);
checkans(userseq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}

const express=require("express");
const app=express();
const port=8080;
app.get("/",(req,res)=>{
    app.render("/js.html");
})