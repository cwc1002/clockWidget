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
  const week = today.getDay();
  const dayName = ['일', '월', '화', '수', '목', '금', '토'];

  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let period = 'AM';
  
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    period = 'PM';
  }

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10? `0${minute}` : minute;
  second = second < 10? `0${second}` : second;

  $clock_date.innerHTML = `${year}년 ${month}월 ${day}일 ${dayName[week]}요일`;
  $hour.textContent = hour;
  $minute.textContent = minute;
  $second.innerHTML = second;
  $period.innerHTML = period;
}

setInterval(getTime, 1000);
