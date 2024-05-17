// content.js

// Function to extract video title and description
function extractVideoInfo() {
  // Find the video title element
  const titleElement = document.querySelector("h1.title");

  // Find the video description element
  const descriptionElement = document.querySelector(
    "yt-formatted-string#description"
  );

  // Extract text content from elements
  const videoTitle = titleElement
    ? titleElement.innerText.trim()
    : "Title not found";
  const videoDescription = descriptionElement
    ? descriptionElement.innerText.trim()
    : "Description not found";

  // Send the extracted data to the background script
  chrome.runtime.sendMessage({
    action: "videoInfo",
    title: videoTitle,
    description: videoDescription,
  });
}

// Call the function to extract video info when the DOM is fully loaded
window.addEventListener("load", extractVideoInfo);
