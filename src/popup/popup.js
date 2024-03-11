console.log("popup loaded");
//make send arrow clickable and log prompt input
const sendArrow = document.querySelector(".sendArrow");
sendArrow.addEventListener("click", logInput);

// Function to initialize the typewriter effect on the specified element
function initializeTypewriter(elementId, message) {
  function typewriterEffect(text, element) {
    const speed = 50;
    let i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  const element = document.getElementById(elementId);

  if (element) {
    element.innerHTML = "";

    typewriterEffect(message, element);
  } else {
    console.error(`Element with ID ${elementId} not found.`);
  }
}

//Function to log input from promptInput
function logInput() {
  const promptInput = document.getElementById("promptInput");
  console.log(promptInput.value);
}

//Function to send user prompt to background.js
function sendPrompt() {
  const promptInput = document.getElementById("promptInput");
  const userInput = promptInput.value;
  chrome.runtime.sendMessage("prompt sent");
}

//Function to check if the user is on youtube
function checkTabURL() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentURL = tabs[0].url;
    console.log("Checking URL");
    console.log("Current URL:", currentURL);

    if (currentURL.includes("youtube.com")) {
      console.log("You are on youtube");
    }
  });
}

// Initial message
initializeTypewriter("writeMessage", "Write your message below!");
document.addEventListener("DOMContentLoaded", function () {
  checkTabURL();
});
