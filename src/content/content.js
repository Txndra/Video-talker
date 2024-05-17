console.log("content.js loaded");

// content.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message received in content script:", message);

  // Perform actions in the content script based on the message

  // Send a response back if needed
  sendResponse({ farewell: "Goodbye from content script!" });
});
