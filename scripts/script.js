const timeToday = document.querySelector("#time-today");
const allTime = document.querySelector("#all-time");

chrome.runtime.sendMessage({ action: "GET_STATE" }, response => {
    allTime.textContent = response.time;
})