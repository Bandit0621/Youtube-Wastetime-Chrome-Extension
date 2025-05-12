document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible"){
        chrome.runtime.sendMessage("startTimer");
    } else {
        chrome.runtime.sendMessage("stopTimer");
    }
});

if (document.visibilityState === "visible"){
    chrome.runtime.sendMessage("startTimer");
}