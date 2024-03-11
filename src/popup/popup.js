console.log("popup.js loaded");

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

// Function to display user prompts
function displayPrompt(promptText) {
  const promptContainer = document.getElementById("promptContainer");

  // Create a new div element for the prompt
  const promptDiv = document.createElement("div");
  promptDiv.className = "user-prompt";
  promptDiv.textContent = promptText;

  // Append the new prompt to the container
  promptContainer.appendChild(promptDiv);
}

//Function to log input from promptInput
function logInput() {
  const promptInput = document.getElementById("promptInput");
  const userPrompt = promptInput.value;
  displayPrompt(userPrompt);
  console.log(promptInput.value);

  //additional functionality for sending prompt to content script, AI processing etc

  promptInput.value = ""; //clear prompt input
}

// Initial message
initializeTypewriter("writeMessage", "Write your message below!");
//make send arrow clickable
const sendArrow = document.getElementById("sendArrow");
sendArrow.addEventListener("click", logInput);
