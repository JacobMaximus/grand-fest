// function loadSVG(){
//     fetch('/images/RGF.svg')
//     .then((response) => {return response.text();})
//     .then((svg) => {
//         document.getElementById('rgf').innerHTML = svg;
//     })
// }


// // Wave animation for .halo
// window.addEventListener("load", () => {
//     const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });
  
//     waveTimeline
//         .to("#G", {
//             y: 7, // Moves up
//             // rotation: 1.5, // Small tilt for a natural effect
//             duration: 1.5, // Faster than before
//             ease: "sine.inOut"
//         })
//         .to("#G", {
//             y: -5, // Moves down
//             // rotation: -1.5, // Tilts the other way
//             duration: 1.2, // Slightly different timing
//             ease: "sine.inOut"
//         })
//         .to("#F", {
//             y: 5, // Moves up again
//             // rotation: 1, // Less tilt
//             duration: 1.8, // Slight delay
//             ease: "sine.inOut"
//         });
//   });
  
// loadSVG();

function loadSVG() {
    fetch('/images/RGF.svg')
    .then(response => response.text())
    .then(svg => {
        document.getElementById('rgf').innerHTML = svg;

        // Wait for the SVG to be added before running animations
        // animateSVG();
        // animateSVG2();
        // animateSVG3();
    })
    .catch(error => console.error("Error loading SVG:", error));
}

function animateSVG() {
    const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });

    waveTimeline
        .to("#R", {
            y: 7, 
            duration: 1.5, 
            ease: "sine.inOut"
        })
        .to("#R", {
            y: -5, 
            duration: 1.2, 
            ease: "sine.inOut"
        })
        .to("#R", {
            y: 5, 
            duration: 1.8, 
            ease: "sine.inOut"
        });
    
    waveTimeline
    .to("#G", {
        y: 7, 
        duration: 1.5, 
        ease: "sine.inOut"
    })
    .to("#G", {
        y: -5, 
        duration: 1.2, 
        ease: "sine.inOut"
    })
    .to("#G", {
        y: 5, 
        duration: 1.8, 
        ease: "sine.inOut"
    });

    waveTimeline
    .to("#F", {
        y: 7, 
        duration: 1.5, 
        ease: "sine.inOut"
    })
    .to("#F", {
        y: -5, 
        duration: 1.2, 
        ease: "sine.inOut"
    })
    .to("#F", {
        y: 5, 
        duration: 1.8, 
        ease: "sine.inOut"
    });
}
function animateSVG2() {
    const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });

    waveTimeline
        .to("#R", { y: -7, duration: 1.5, ease: "sine.inOut" })
        .to("#R", { y: 5, duration: 1.5, ease: "sine.inOut" })
        .to("#R", { y: 0, duration: 1.5, ease: "sine.inOut" });

    waveTimeline
        .to("#G", { y: 5, duration: 1.5, ease: "sine.inOut" }, "-=2") // Delayed slightly for wave effect
        .to("#G", { y: -5, duration: 1.5, ease: "sine.inOut" })
        .to("#G", { y: 0, duration: 1.5, ease: "sine.inOut" });

    waveTimeline
        .to("#F", { y: -5, duration: 1.5, ease: "sine.inOut" }, "-=2") 
        .to("#F", { y: 7, duration: 1.5, ease: "sine.inOut" })
        .to("#F", { y: 0, duration: 1.5, ease: "sine.inOut" });
}

function animateSVG3(){
    const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });

  waveTimeline
      .to("#rgf", {
          y: 7, // Moves up
          // rotation: 1.5, // Small tilt for a natural effect
          duration: 1.5, // Faster than before
          ease: "sine.inOut"
      })
      .to("#rgf", {
          y: -5, // Moves down
          // rotation: -1.5, // Tilts the other way
          duration: 1.2, // Slightly different timing
          ease: "sine.inOut"
      })
      .to("#rgf", {
          y: 5, // Moves up again
          // rotation: 1, // Less tilt
          duration: 1.8, // Slight delay
          ease: "sine.inOut"
      })
      .to("#rgf", {
          y: -9, // Moves down
          // rotation: -0.5, // Barely tilts
          duration: 1.5, // Natural timing
          ease: "sine.inOut"
      });
}

loadSVG();
