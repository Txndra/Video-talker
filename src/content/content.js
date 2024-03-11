// Check if the current page is a YouTube video page
if (window.location.href.includes("youtube.com/watch")) {
  // Extract the video ID from the URL
  const videoId = new URLSearchParams(window.location.search).get("v");

  console.log("Current page is a YouTube video page.");
  console.log("Video ID:", videoId);

  // Send a message to the background script with the video ID
  chrome.runtime.sendMessage({ videoId: videoId }, (response) => {
    console.log("Message sent to background script. Response:", response);
  });
} else {
  console.log("Not a YouTube video page.");
}
