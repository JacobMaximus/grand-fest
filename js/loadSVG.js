function loadSVG() {
    fetch('/images/RGF.svg')
    .then(response => response.text())
    .then(svg => {
        document.getElementById('rgf').innerHTML = svg;

        // Wait for the SVG to be added before running animations
        // animateSVG();
        // animateSVG2();
        animateSVG3();
    })
    .catch(error => console.error("Error loading SVG:", error));
}
function animateSVG3(){
    const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });

  waveTimeline
      .to("#rgf", {
          y: 8, 
          // rotation: 1.5,
          duration: 1.1, 
          ease: "sine.inOut"
      })
      .to("#rgf", {
          y: -4,
          // rotation: -1.5, 
          duration: 1.2, 
          ease: "sine.inOut"
      })
      .to("#rgf", {
          y: 4,
          // rotation: 1, 
          duration: 1.4, 
          ease: "sine.inOut"
      })
      .to("#rgf", {
          y: -8, 
          // rotation: -0.5, 
          duration: 1.1, 
          ease: "sine.inOut"
      });
}

loadSVG();
