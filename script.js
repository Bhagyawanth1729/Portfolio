document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "AI Software Engineer",
    "LLM & Agent Evaluator",
    "Python Backend Developer",
    "Systems & Microservices"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = '';
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newWordDelay = 2000;

  const typingEl = document.querySelector('.typing-animation') || document.getElementById('typing');

  function type() {
    if (!typingEl) return;
    if (charIndex < words[wordIndex].length) {
      currentWord += words[wordIndex].charAt(charIndex);
      typingEl.textContent = currentWord;
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newWordDelay);
    }
  }

  function erase() {
    if (!typingEl) return;
    if (charIndex > 0) {
      currentWord = currentWord.slice(0, -1);
      typingEl.textContent = currentWord;
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed + 1100);
    }
  }

  type();
});

// Animate progress bars
const progressBars = document.querySelectorAll('.progress-done');
progressBars.forEach(bar => {
  setTimeout(() => {
    bar.style.width = bar.getAttribute('data-done') + '%';
    bar.style.opacity = 1;
  }, 500);
});

// Animate circular skills
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  let percent = circle.getAttribute('data-percent') || circle.getAttribute('data-pct');
  if (percent) {
    circle.style.setProperty('--percent', percent);
  }
});
