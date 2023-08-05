const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

let currentyear = new Date().getFullYear();
let birth=new Date(`april 22 ${currentyear} 00:00:00`);
let currentDate=new Date();
let d2=birth-currentDate;
if(d2<=0){
    birth=new Date(`april 22 ${currentyear+1} 00:00:00`);
}
function UpdateTime(){
    const currentDate=new Date();
    const diff=birth-currentDate;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
 
}
 setInterval(UpdateTime,1000);

