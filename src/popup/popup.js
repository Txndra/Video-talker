// popup.js

// Function to initialize the typewriter effect on the specified element
function initializeTypewriter(elementId, message) {
  // Typewriter effect function
  function typewriterEffect(text, element) {
    const speed = 50; // Adjust the typing speed (milliseconds per character)
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

  // Get the element by ID
  const element = document.getElementById(elementId);

  // Check if the element exists
  if (element) {
    // Clear any existing content in the element
    element.innerHTML = "";

    // Start the typewriter effect with the specified message
    typewriterEffect(message, element);
  } else {
    console.error(`Element with ID ${elementId} not found.`);
  }
}

// Example usage
initializeTypewriter("writeMessage", "Write your message below!");
