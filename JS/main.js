const $hour = document.querySelector('.hour');
const $minute = document.querySelector('.minute');
const $second = document.querySelector('.second');
const $period = document.querySelector('.period');

function getTime() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  } else if (hour > 12) {
    $period.innerHTML = 'PM';
    hour = `0${hour-12}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  if (second < 10) {
    second = `0${second}`;
  }


  $hour.innerHTML = hour;
  $minute.innerHTML = minute;
  $second.innerHTML = second;
}

setInterval(getTime, 1000);
