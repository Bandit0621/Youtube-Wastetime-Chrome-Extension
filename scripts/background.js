let totalSeconds = 0;
let activeTabId = null;
let timer = null;

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message === "startTimer" && sender.tab) {
    if (timer) clearInterval(timer);
    activeTabId = sender.tab.id;
    timer = setInterval(() => {
      totalSeconds++;
      chrome.storage.local.set({ youtubeTime: totalSeconds });
    }, 1000);
  }

  if (message === "stopTimer") {
    clearInterval(timer);
    timer = null;
    activeTabId = null;
  }
});

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.get("youtubeTime", (data) => {
    totalSeconds = data.youtubeTime || 0;
  });
});