const timeToday = document.querySelector("#time-today");
const allTime = document.querySelector("#all-time");

chrome.runtime.sendMessage({ action: "GET_STATE" }, response => {
    if (response && response.time) {
        allTime.textContent = response.time;
    } else {
        console.error("No valid response received.");
    }
})