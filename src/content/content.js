// Check if the user is watching a YouTube video and retrieve the video ID
if (window.location.href.indexOf("youtube.com/watch") > -1) {
  //console log for debugging
  console.log("This is a YouTube video page!");
  // Extract video ID from the URL
  var videoId = window.location.href.split("v=")[1];
  var ampersandPosition = videoId.indexOf("&");

  // Remove any additional parameters after the video ID
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }

  // Log the video ID to the console
  console.log("videoId: " + videoId);

  // Send the video ID as a message to the background script
  chrome.runtime.sendMessage({ videoId: videoId });
}
