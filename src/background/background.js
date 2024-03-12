// for debugging
console.log("background.js loaded");

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message received in background.js");
});
