let time = document.querySelector("#time");
let play = document.querySelector("#play");
let reset = document.querySelector("#reset");
let stop = document.querySelector("#stop");
let [seconds,minutes,hours] = [0,0,0];
let t = null;


function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds =0;
        minutes++;
        if(minutes==60){
            minutes =0;
            hours++;
        }
    }
    let h = hours<10?"0"+hours:hours;
    let m = minutes<10?"0"+minutes:minutes;
    let s = seconds<10?"0"+seconds:seconds;
    time.innerHTML = h+":"+m+":"+s;
}
function watchstart(){
    if(t!==null){
        clearInterval(t);
    }
    t = setInterval(stopwatch,1000);
}
play.addEventListener('click',()=>{
    watchstart();
})

reset.addEventListener("click",()=>{
    clearInterval(t);
    [seconds,minutes,hours] = [0,0,0];
    time.innerHTML = "00:00:00";

})
stop.addEventListener('click',()=>{
    clearInterval(t);
})

