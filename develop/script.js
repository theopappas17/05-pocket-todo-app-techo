//Access moment API
const today = moment();

//DOM Interactions
let dateToday = document.getElementById('currentDay');
 
//DOM JS Insertions
dateToday.innerHTML = today.format("dddd, MMMM Do YYYY");

