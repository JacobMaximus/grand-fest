// Strips-spinning animtation for celeb-carousel
const images = [
    "/images/placeholders/01.png",
    "/images/placeholders/02.png",
    "/images/placeholders/03.png",
    "/images/placeholders/04.png",
    "/images/placeholders/05.png",
    "/images/placeholders/06.png",
    "/images/placeholders/07.png",
    "/images/placeholders/08.png",
    "/images/placeholders/09.png",
  ];
  
  const wrapper = document.querySelector(".wrapper");
  const numStrips = 20; 

  wrapper.innerHTML = "";
  for (let i = 0; i < numStrips; i++) {
    const strip = document.createElement("div");
    strip.classList.add("strip");
    strip.style.height = `${400 / numStrips}px`; 
    strip.style.backgroundPosition = `0px -${(400 / numStrips) * i}px`; 
    strip.style.animationDelay = `${i * 0.1}s`; 
    wrapper.appendChild(strip);
  }
  
  const imageStrips = document.querySelectorAll(".wrapper div");
  
  imageStrips.forEach((strip, i) => {
    strip.style.backgroundImage = `url(${images[0]})`; 
    strip.style.backgroundPosition = `0px -${(400 / numStrips) * i}px`;
    strip.setAttribute("data-index", 0);
  });
  
  function updateImages() {
    let currentIndex = parseInt(imageStrips[0].getAttribute("data-index") || 0);
    let nextIndex = (currentIndex + 1) % images.length;
  
    imageStrips.forEach((strip, i) => {
      strip.style.backgroundImage = `url(${images[nextIndex]})`;
      strip.style.backgroundPosition = `0px -${(400 / numStrips) * i}px`; 
      strip.setAttribute("data-index", nextIndex);
    });
  
    setTimeout(updateImages, 8595); 
  }

setTimeout(updateImages, 8595); 


window.addEventListener("load", () => {

	// Wave animation for celeb-carrousel
	const waveTimeline = gsap.timeline({ repeat: -1, yoyo: true });

	waveTimeline
		.to(".wrapper", {
			y: 35,
			rotation: 1.5,
			duration: 1.5, 
			ease: "sine.inOut"
		})
		.to(".wrapper", {
			y: -20,
			rotation: -1.5, 
			duration: 1.2,
			ease: "sine.inOut"
		})
		.to(".wrapper", {
			y: 25,
			rotation: 1, 
			duration: 1.8, 
			ease: "sine.inOut"
		})
		.to(".wrapper", {
			y: -15, 
			rotation: -0.5, 
			duration: 1.5,
			ease: "sine.inOut"
		});

	
});