const textArray = [
"Front-End Developer",
"Software Developer",
  "Graphic Designer"
];

let i = 0; // index of current phrase
let j = 0; // index of character in phrase
let isDeleting = false;

const typingSpeed = 120;   // typing speed per letter
const deletingSpeed = 60;  // deleting speed per letter
const delayBetween = 1200; // pause before deleting

// Load typing sound (optional: put type-sound.mp3 in same folder)
const typingSound = new Audio("type-sound.mp3");
typingSound.volume = 0.4;

function playSound() {
  typingSound.currentTime = 0;
  typingSound.play();
}

function typeEffect() {
  const typingElement = document.querySelector(".typing-text");
  const currentPhrase = textArray[i];

  if (!isDeleting && j <= currentPhrase.length) {
    // typing forward
    typingElement.textContent = currentPhrase.substring(0, j);
    j++;
    playSound();
    setTimeout(typeEffect, typingSpeed);

  } else if (isDeleting && j >= 0) {
    // deleting backward
    typingElement.textContent = currentPhrase.substring(0, j);
    j--;
    setTimeout(typeEffect, deletingSpeed);

  } else if (!isDeleting && j > currentPhrase.length) {
    // pause at full word
    isDeleting = true;
    setTimeout(typeEffect, delayBetween);

  } else if (isDeleting && j < 0) {
    // move to next word
    isDeleting = false;
    i = (i + 1) % textArray.length; // loop through array
    setTimeout(typeEffect, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
