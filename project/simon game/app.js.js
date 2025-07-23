let gameSeq=[];
let userSeq=[];
let highScore=[];

let btns=["first","second","third","fourth"];

let started=false;
let label=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started==false){
    started=true;
     console.log("game started");
     labelUp();
  }
   
});
function gameFlash(randBtn){
      randBtn.classList.add("gameFlash");
       setTimeout(function(){
        randBtn.classList.remove("gameFlash");
       },500);
}

function userFlash(randBtn){
      randBtn.classList.add("userFlash");
       setTimeout(function(){
        randBtn.classList.remove("userFlash");
       },250);
}

function labelUp(){
   userSeq=[];
    label++;
    h2.innerText=`Label ${label}`;
    let randIdx=Math.floor(Math.random()*3);
    let randBox=btns[randIdx]
    let randBtn=document.querySelector(`.${randBox}`);
    gameSeq.push(randBox);
  console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx){
  console.log(`curr label`,label);
 if(userSeq[idx]===gameSeq[idx]){
   if(userSeq.length==gameSeq.length){
   setTimeout(labelUp,1000);
   }
 }
 else{
  h2.innerHTML=`game over!your<b>score was ${label}</b><br>press any key to restart the game`;
         highScore.push(label);
          console.log(highScore);
  gameReset();
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
  
 }

}


function btnPress(){
    console.log("button pressed");
   let btn=this;
   userFlash(btn);
   let userbtn=btn.getAttribute("id");
  userSeq.push(userbtn);
  console.log(userSeq);
   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn")
for( let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function gameReset(){
  gameSeq=[];
  userSeq=[];
  started=false;
  label=0;
}

 let p=document.querySelector("p");
 let scorebtn=document.querySelector("#btn");

 scorebtn.addEventListener("click",function(){
   let score= highScore.reduce((res,el)=>{
        if(res<el){
            return el;
        }
        else{
            return res;
        }
    })
    console.log(score);
    p.innerText=`your highest score is ${score}.`;
 });
