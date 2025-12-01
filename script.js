// Dark mode toggle
const modeBtn = document.querySelector(".mode-toggle");
if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const darkOn = document.body.classList.contains("dark-mode");
    modeBtn.textContent = darkOn ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
}

// Flip cards on click (for gallery cards)
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip-active");
  });
});

// Lightbox for every image in main
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox ? lightbox.querySelector(".lightbox-image") : null;
const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;

if (lightbox && lightboxImg && lightboxClose) {
  document.querySelectorAll("main img").forEach(img => {
    img.addEventListener("click", e => {
      e.stopPropagation();
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox || e.target === lightboxClose) {
      lightbox.classList.remove("active");
    }
  });

  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
}

const heading = document.querySelector(".typing-title");
if (heading) {
  const text = heading.textContent.trim();
  heading.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      heading.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }

  window.addEventListener("load", type);
}

const musicBtn = document.getElementById("music-btn");
const cafeMusic = new Audio("sounds/cafe-music.mp3");
cafeMusic.loop = true;
cafeMusic.volume = 0.4; 

let isPlaying = false;

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      cafeMusic.play()
        .then(() => {
          isPlaying = true;
          musicBtn.textContent = "⏸️ Pause Café Music";
        })
        .catch(err => {
          console.log("User interaction required:", err);
        });
    } else {
      cafeMusic.pause();
      isPlaying = false;
      musicBtn.textContent = "🎵 Set the Café Mood";
    }
  });
}
