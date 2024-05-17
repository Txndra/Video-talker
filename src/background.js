// for debugging
console.log("background.js loaded");

chrome.tabs.executeScript({
  file: "content.js",
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message received in background.js");
});
