function loadSVG() {
    fetch('/images/RGF.svg')
    .then(response => response.text())
    .then(svg => {
        document.getElementById('rgf').innerHTML = svg;

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

window.addEventListener('load', () =>{
    // animation for #halo
	const waveTimeline2 = gsap.timeline({ repeat: -1, yoyo: true });

	waveTimeline2
		.to("#halo", {
			y: 7, 
			// rotation: 1.5, 
			duration: 1.5, 
			ease: "sine.inOut"
		})
		.to("#halo", {
			y: -5,
			// rotation: -1.5, 
			duration: 1.2, 
			ease: "sine.inOut"
		})
		.to("#halo", {
			y: 5, 
			// rotation: 1, 
			duration: 1.8,
			ease: "sine.inOut"
		})
		.to("#halo", {
			y: -9, 
			// rotation: -0.5,
			duration: 1.5, 
			ease: "sine.inOut"
		});

	// animation for #orb
	const waveTimeline3 = gsap.timeline({ repeat: -1, yoyo: true });
		
		waveTimeline
			.to("#orb", {
				y: 7, 
				// rotation: 1.5,
				duration: 1.0, 
				ease: "sine.inOut"
			})
			.to("#orb", {
				y: -5,
				// rotation: -1.5, 
				duration: 1.3, 
				ease: "sine.inOut"
			})
			.to("#orb", {
				y: 4.5,
				// rotation: 1, 
				duration: 1.2, 
				ease: "sine.inOut"
			})
			.to("#orb", {
				y: -7, 
				// rotation: -0.5, 
				duration: 1.2, 
				ease: "sine.inOut"
			});

})