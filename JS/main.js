const $clock_date = document.querySelector('.clock_date');
const $hour = document.querySelector('.hour');
const $minute = document.querySelector('.minute');
const $second = document.querySelector('.second');
const $period = document.querySelector('.period');

function getTime() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const day1 = today.getDay();
  const dayName = ['일', '월', '화', '수', '목', '금', '토'];

  let hour = today.getHours();
  // let hour = 23;
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let period = 'AM';

  if (hour < 10) {
    hour = `0${hour}`;
  } else if (hour > 12) {
    if (hour < 22) {
      hour = `0${hour-12}`;
    } else {
      hour = `${hour-12}`;
    }
    period = 'PM';
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  
  $clock_date.innerHTML = `${year}년 ${month}월 ${day}일 ${dayName[day1]}요일`;
  $hour.innerHTML = hour;
  $minute.innerHTML = minute;
  $second.innerHTML = second;
  $period.innerHTML = period;
}

setInterval(getTime, 1000);
