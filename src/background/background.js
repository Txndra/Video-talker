// for debugging
console.log("background.js loaded");

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message contains the videoId property
  if (message.videoId) {
    var videoId = message.videoId;
    // Do something with the videoId
    console.log("Received videoId: " + videoId);
    // You can perform any further processing or actions with the videoId here
  }
});
