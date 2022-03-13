// Import stylesheets
import './style.css';

// Write Javascript code!

function getCustomizedDate() {
  const dayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const d = new Date();
  const day = dayArray[d.getDay()];
  let hours = d.getHours();
  console.log('f----', hours);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let minutes = d.getMinutes();
  let sec = d.getSeconds();
  console.log('TODAY IS:', day);
  console.log('TODAY TIME IS:', +hours + ampm + ':' + minutes + ':' + sec);
}

getCustomizedDate();
