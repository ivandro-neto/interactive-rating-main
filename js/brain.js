let actived = "0";
const rateButton = document;
const contentThanks = document.getElementById("container-thanks");
const contentRate = document.getElementById("container-rate");
const showRate = document.getElementById("rate-var");

contentRate.style.display = "flex";
contentThanks.style.display = "none";

const submit = document.getElementById("submit").addEventListener("click", () =>{
    contentRate.style.display = "none";
    contentThanks.style.display = "flex";
});

function over(x) {
  if(x.style.backgroundColor == "hsl(25, 97%, 53%)" || actived == x.id){    
    x.style.backgroundColor = "hsl(25, 97%, 53%)";
    x.style.color = "hsl(0, 0%, 100%)";  
   }else{
        x.style.backgroundColor = "hsl(217, 12%, 63%)";
        x.style.color = "hsl(0, 0%, 100%)";
    }
}

function out(x) {if (x.style.backgroundColor != "hsl(25, 97%, 53%)" && actived != x.id){x.style.backgroundColor = "hsl(213, 19%, 18%)"; x.style.color = "hsl(216, 12%, 54%)";}}

function changeTost(){
    actived = "1";
    showRate.innerHTML = actived;
    selected(actived);
  }

  function changeTond() {
    actived = "2";
    showRate.innerHTML = actived;
    selected(actived);
  }

  function changeTord() {
    actived = "3";
    showRate.innerHTML = actived;
    selected(actived);
  }

  function changeToth(){
    actived = "4";
    showRate.innerHTML = actived;
    selected(actived);
  }

  function changeTofth() {
    actived = "5";
    showRate.innerHTML = actived;
    selected(actived);
  }

function selected(_actived){
    
        if(_actived == "1"){
            rateButton.getElementById(1).style.backgroundColor = "hsl(25, 97%, 53%)";
            rateButton.getElementById(2).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(3).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(4).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(5).style.backgroundColor = "hsl(213, 19%, 18%)";

            rateButton.getElementById(1).style.color = "hsl(0, 0%, 100%)";
            rateButton.getElementById(2).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(3).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(4).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(5).style.color = "hsl(216, 12%, 54%)";
        }
        if(_actived =="2"){
            rateButton.getElementById(2).style.backgroundColor = "hsl(25, 97%, 53%)";
            rateButton.getElementById(1).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(3).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(4).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(5).style.backgroundColor = "hsl(213, 19%, 18%)";

            rateButton.getElementById(2).style.color = "hsl(0, 0%, 100%)";
            rateButton.getElementById(1).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(3).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(4).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(5).style.color = "hsl(216, 12%, 54%)";
        }
        if(_actived == "3"){
            rateButton.getElementById(3).style.backgroundColor = "hsl(25, 97%, 53%)";
            rateButton.getElementById(2).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(1).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(4).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(5).style.backgroundColor = "hsl(213, 19%, 18%)";

            rateButton.getElementById(3).style.color = "hsl(0, 0%, 100%)";
            rateButton.getElementById(2).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(1).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(4).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(5).style.color = "hsl(216, 12%, 54%)";
        }
        if(_actived == "4"){
            rateButton.getElementById(4).style.backgroundColor = "hsl(25, 97%, 53%)";
            rateButton.getElementById(2).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(3).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(1).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(5).style.backgroundColor = "hsl(213, 19%, 18%)";

            rateButton.getElementById(4).style.color = "hsl(0, 0%, 100%)";
            rateButton.getElementById(2).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(3).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(1).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(5).style.color = "hsl(216, 12%, 54%)";
        }   
        if(_actived == "5"){
            rateButton.getElementById(5).style.backgroundColor = "hsl(25, 97%, 53%)";
            rateButton.getElementById(2).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(3).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(4).style.backgroundColor = "hsl(213, 19%, 18%)";
            rateButton.getElementById(1).style.backgroundColor = "hsl(213, 19%, 18%)";

            rateButton.getElementById(5).style.color = "hsl(0, 0%, 100%)";
            rateButton.getElementById(2).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(3).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(4).style.color = "hsl(216, 12%, 54%)";
            rateButton.getElementById(1).style.color = "hsl(216, 12%, 54%)";
        }
    
}

selected(actived);
