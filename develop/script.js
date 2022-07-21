let now = moment();

//DOM Interactions
let dateToday = document.getElementById('currentDay');
let timeNow = document.getElementById('currentTime');
let h800 = document.getElementById('h800');
let h900 = document.getElementById('h900');
let h1000 = document.getElementById('h1000');
let h1100 = document.getElementById('h1100');
let h1200 = document.getElementById('h1200');
let h1300 = document.getElementById('h1300');
let h1400 = document.getElementById('h1400');
let h1500 = document.getElementById('h1500');
let h1600 = document.getElementById('h1600');
let h1700 = document.getElementById('h1700');
let h1800 = document.getElementById('h1800');
let h1900 = document.getElementById('h1900');
let h2000 = document.getElementById('h2000');

//DOM JS Insertions
dateToday.innerHTML = now.format("dddd, MMMM Do YYYY");
timeNow.innerHTML = now.format("HHMM");

//Functions
function determineTimeBefore() {
  console.log(parseInt((now.format("HHMM"))));
  console.log(typeof(parseInt((now.format("HHMM")))));
  if (parseInt(now.format("HHMM")) < 800) {
    h800.style.backgroundColor = 'gray';
} else if (parseInt(now.format("HHMM")) < 900) {
  h900.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1000) {
  h1000.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1200) {
  h1200.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1300) { 
    h1300.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1400) {
    h1400.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1500) {
    h1500.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1600) {
    h1600.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1700) {
    h1700.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1800) {
  h1800.display.style.past;
} else if (parseInt(now.format("HHMM")) < 1900) {
  h1900.display.style.past;
} else if (parseInt(now.format("HHMM")) < 2000) {
  h2000.display.style.past;
};
}

determineTimeBefore();