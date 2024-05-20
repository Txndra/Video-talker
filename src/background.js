// for debugging
console.log("background.js loaded");

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Message received in background.js");
  console.log(message);
  if (message.action === "videoInfo") {
    // Received video info from content script
    const videoTitle = message.title;
    const videoDescription = message.description;

    // Log the video info (you can perform further processing here)
    console.log("Video Title:", videoTitle);
    console.log("Video Description:", videoDescription);
  }
});
