const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const countdown = document.querySelector(".countdown");
const currentYear = new Date().getFullYear();
const timeNextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

function newYearCountdown() {
  const timeNow = new Date();
  const result = timeNextYear - timeNow;

  const seconds = Math.floor(result / 1000) % 60;
  const minutes = Math.floor(result / 1000 / 60) % 60;
  const hours = Math.floor(result / 1000 / 60 / 60) % 24;
  const days = Math.floor(result / 1000 / 60 / 60 / 24);

  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
}

setInterval(newYearCountdown)

// SNOW EFFECT
setInterval(createSnow, 100);

function createSnow(){
  const snow = document.createElement("i");
  snow.classList.add("fas");
  snow.classList.add("fa-snowflake");

  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = Math.random() * 3 + 2 + "s";
  snow.style.opacity = Math.random();
  snow.style.fontSize = Math.random() * 10 + 10 + "px";
  document.body.append(snow);

  setTimeout(() => {
      snow.remove();
  }, 6000);
}