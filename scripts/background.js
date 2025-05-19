let totalSeconds = 0;
let timer = null;

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message === "startTimer") {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      totalSeconds++;
      chrome.storage.local.set({ youtubeTime: totalSeconds });
    }, 1000);
  }

  if (message === "stopTimer") {
    clearInterval(timer);
    timer = null;
  }
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get("youtubeTime", (data) => {
    totalSeconds = data.youtubeTime || 0;
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "GET_STATE") {
    sendResponse({ time: totalSeconds });
  }
});