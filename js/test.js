
// window.addEventListener("load", () => {
//     const images = document.querySelectorAll(".wrapper");

//     if (images.length === 0) {
//         console.error("No images found in the celeb-carousel.");
//         return; 
//     }

//     gsap.set(images, { opacity: 0, y: 200 });

//     let index = 0;

//     function animateWaveEffect() {
//         const tl = gsap.timeline({
//             onComplete: () => {
//                 index = (index + 1) % images.length;
//                 animateWaveEffect();
//             }
//         });

//         // Animation for each image to follow a wave-like motion
//         tl.to(images[index], {
//             opacity: 1,
//             y: -20,
//             duration: 2.5,
//             ease: "power1.inOut",
//         })
//         .to(images[index], {
//             y: 10,
//             duration: 1,
//             ease: "power1.inOut",
//         })
//         .to(images[index], {
//             y: -10,
//             duration: 1,
//             ease: "power1.inOut",
//         })
//         .to(images[index], {
//             opacity: 1,
//             y: 200,
//             duration: 2.5,
//             ease: "power1.inOut",
//         });
//     }

//     animateWaveEffect();
// });

// Wait for the page to load
// Wait for the page to load
// Wait for the page to load
// Wait for the page to load
// Wait for the page to load
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
