let timer = 45;
let score = 0;
var hitrn =0;

function scoreIncrease(){
    score += 10;
    document.querySelector("#scorehit").textContent = score;
}

function getnwhit(){
   hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}

function bubble(){
    let clutter="";

for(let i =0; i<270; i++){
    const rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector(".bpanl").innerHTML = clutter;
}

function runtimer(){
        let time=setInterval(function (){
            if(timer > 0){
                timer--;
            document.querySelector("#timerval").textContent = timer;
            }
            else{
                clearInterval(time);
                document.querySelector(".bpanl").innerHTML = `GAME OVER !`;
            }
        }, 1000);
}

let c =document.querySelector(".bpanl");
c.addEventListener("click",function (dets) {
    let clickednum= (Number(dets.target.textContent));

    if(clickednum === hitrn){
        scoreIncrease();
        bubble();
        getnwhit();
    }
});


getnwhit();
runtimer();
bubble();

