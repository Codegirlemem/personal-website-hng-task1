const currentTime = document.querySelector("#currentTime");
const currentDay = document.querySelector("#currentDay");
const myGoals = document.querySelector("#my-goals-nav");
const contact = document.querySelector("#contact-nav");
const footer = document.querySelector("footer");
const goalSection = document.querySelector(".goal-section");
const menuIcon = document.querySelector(".menu-icon");

const header = document.querySelector("header");

// SHOW AND HIDE MENU ON MOBILE VIEW
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("showMenu");
  header.classList.toggle("showMenu");
});

// UPDATES THE TIME TO THE CURRENT TIME TO UTC AND DISPLAYS AS HOUR, MINUTES AND SECONDS
function updateCurrentTime() {
  const date = new Date();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const time =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  currentTime.textContent = time;
}

// AUTOMATIC UPDATE OF THE TIME EVERY ONE SECOND INTERVAL
setInterval(updateCurrentTime, 1000);

// GET THE DAY OF THE WEEK AS UTC AND DISPLAY
const day = new Date().getUTCDay();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

currentDay.textContent = weekDays[day] + ",";

// SETS SMOOTH SCROLLING TO MY GOALS SECTION
myGoals.addEventListener("click", () => {
  goalSection.scrollIntoView({ behavior: "smooth" });
});

// SETS SMOOTH SCROLLING TO THE FOOTER FOR CONTACT SECTION
contact.addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth" });
});
