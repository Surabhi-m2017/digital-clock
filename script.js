let is24Hour = true;

const clock =
document.getElementById("clock");

const toggle =
document.getElementById("toggle");

function showTime(){

const now =
new Date();

let hours =
now.getHours();

const minutes =
String(now.getMinutes())
.padStart(2,"0");

const seconds =
String(now.getSeconds())
.padStart(2,"0");

let period = "";

if(!is24Hour){

period =
hours >= 12
? " PM"
: " AM";

hours =
hours % 12;

if(hours === 0){
hours = 12;
}

}

hours =
String(hours)
.padStart(2,"0");

clock.innerHTML =
`${hours}:${minutes}:${seconds}${period}`;

}

toggle.addEventListener(
"click",
function(){

is24Hour =
!is24Hour;

showTime();

}
);

showTime();

setInterval(
showTime,
1000
);