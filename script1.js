// Text-to-Speech
document.getElementById("speak-btn").addEventListener("click", () => {
  const text = document.getElementById("tts-text").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});

// Speech-to-Text
document.getElementById("start-speech").addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = (event) => {
    document.getElementById("speech-output").textContent = event.results[0][0].transcript;
  };
});

// Magnifier
document.getElementById("magnify-btn").addEventListener("click", () => {
  document.getElementById("magnify-text").style.fontSize = "2rem";
});

document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("magnify-text").style.fontSize = "1rem";
});

// Screen Reader
document.getElementById("reader-btn").addEventListener("click", () => {
  const content = document.getElementById("reader-content").textContent;
  const utterance = new SpeechSynthesisUtterance(content);
  speechSynthesis.speak(utterance);
});

// Text Resizer
document.getElementById("increase-font").addEventListener("click", () => {
  document.getElementById("resizer-text").style.fontSize = "larger";
});

document.getElementById("decrease-font").addEventListener("click", () => {
  document.getElementById("resizer-text").style.fontSize = "smaller";
});

// Virtual Keyboard
const keyboardContainer = document.getElementById("virtual-keyboard");
const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
keys.forEach((key) => {
  const button = document.createElement("button");
  button.textContent = key;
  button.addEventListener("click", () => {
    const input = document.getElementById("keyboard-input");
    input.value += key;
  });
  keyboardContainer.appendChild(button);
});
document.getElementById("clear-keyboard").addEventListener("click", () => {
  document.getElementById("keyboard-input").value = "";
});
