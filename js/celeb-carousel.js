// Strips-spinning animtation for celeb-carousel
const images = [
    "https://rathinamfest.com/assets/images/01.png",
    "https://rathinamfest.com/assets/images/02.png",
    "https://rathinamfest.com/assets/images/03.png",
    "https://rathinamfest.com/assets/images/04.png",
    "https://rathinamfest.com/assets/images/05.png",
    "https://rathinamfest.com/assets/images/06.png",
    "https://rathinamfest.com/assets/images/07.png"
  ];
  
  const wrapper = document.querySelector(".wrapper");
  const numStrips = 20; // Number of strips to cover the full image
  
  // Clear existing content & generate strips dynamically
  wrapper.innerHTML = "";
  for (let i = 0; i < numStrips; i++) {
    const strip = document.createElement("div");
    strip.classList.add("strip");
    strip.style.height = `${400 / numStrips}px`; // Ensure correct slicing
    strip.style.backgroundPosition = `0px -${(400 / numStrips) * i}px`; // Align slices
    strip.style.animationDelay = `${i * 0.1}s`; // Stagger animation for wave effect
    wrapper.appendChild(strip);
  }
  
  // Select all strips after they are created
  const imageStrips = document.querySelectorAll(".wrapper div");
  
  // **Show First Image Immediately**
  imageStrips.forEach((strip, i) => {
    strip.style.backgroundImage = `url(${images[0]})`; // Set first image manually
    strip.style.backgroundPosition = `0px -${(400 / numStrips) * i}px`;
    strip.setAttribute("data-index", 0);
  });
  
  // Function to update images after each spin
  function updateImages() {
    let currentIndex = parseInt(imageStrips[0].getAttribute("data-index") || 0);
    let nextIndex = (currentIndex + 1) % images.length;
  
    imageStrips.forEach((strip, i) => {
      strip.style.backgroundImage = `url(${images[nextIndex]})`;
      strip.style.backgroundPosition = `0px -${(400 / numStrips) * i}px`; // Keep image aligned
      strip.setAttribute("data-index", nextIndex);
    });
  
    setTimeout(updateImages, 8595); // Run every 20s (full spin cycle)
  }
  
  // Start Image Update Loop
//   setTimeout(updateImages, 20000);
setTimeout(updateImages, 8595); // Runs every 10s (twice as fast)


// Wave animation for celeb-carrousel
window.addEventListener("load", () => {
  const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });

  waveTimeline
      .to(".wrapper", {
          y: 35, // Moves up
          rotation: 1.5, // Small tilt for a natural effect
          duration: 1.5, // Faster than before
          ease: "sine.inOut"
      })
      .to(".wrapper", {
          y: -20, // Moves down
          rotation: -1.5, // Tilts the other way
          duration: 1.2, // Slightly different timing
          ease: "sine.inOut"
      })
      .to(".wrapper", {
          y: 25, // Moves up again
          rotation: 1, // Less tilt
          duration: 1.8, // Slight delay
          ease: "sine.inOut"
      })
      .to(".wrapper", {
          y: -15, // Moves down
          rotation: -0.5, // Barely tilts
          duration: 1.5, // Natural timing
          ease: "sine.inOut"
      });
});

  
// // Wave animation for .halo
// window.addEventListener("load", () => {
//   const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });

//   waveTimeline
//       .to("#halo", {
//           y: 20, // Moves up
//           rotation: 1.5, // Small tilt for a natural effect
//           duration: 1.5, // Faster than before
//           ease: "sine.inOut"
//       })
//       .to("#halo", {
//           y: -20, // Moves down
//           rotation: -1.5, // Tilts the other way
//           duration: 1.2, // Slightly different timing
//           ease: "sine.inOut"
//       })
//       .to("#halo", {
//           y: 25, // Moves up again
//           rotation: 1, // Less tilt
//           duration: 1.8, // Slight delay
//           ease: "sine.inOut"
//       })
//       .to("#halo", {
//           y: -15, // Moves down
//           rotation: -0.5, // Barely tilts
//           duration: 1.5, // Natural timing
//           ease: "sine.inOut"
//       });
// });
