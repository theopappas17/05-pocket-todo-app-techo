const today = moment();

let dateToday = document.getElementById('currentDay');

dateToday.innerHTML = today.format("dddd, MMMM Do YYYY");

