// function showTime() {
//     let time = new Date();
//     let hour = time.getHours();
//     let min = time.getMinutes();
//     let sec = time.getSeconds();
//     hour = hour < 10 ? "0" + hour : hour;
//     min = min < 10 ? "0" + min : min;
//     sec = sec < 10 ? "0" + sec : sec;
//     let currentTime = hour + ":" + min + ":" + sec;
//     document.getElementById("clock").innerHTML = currentTime;
// }
// setInterval(showTime, 1000);
// showTime();


// x

let second = 37;
let minute = 22;
let hour = 16;

// start.addEventListener('click',startClock)
// let startStop;
startStop = setInterval(myclock ,1000)


function myclock(){

    second++;
    if ( second ==60 ){
        minute++;
        second=0;
    }
    if ( minute==60 ){
        hour++;
        minute=0;
    }
    if ( hour==24 ){
        hour=0;
        
    }

    document.querySelector('h1') .innerHTML= `${ hour.toString( ).padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`


}
stop.addEventListener('click',stopClock);

function stopClock(){
 clearInterval(startStopp);
}