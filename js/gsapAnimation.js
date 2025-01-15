// window.addEventListener("load", () => {
//     const images = document.querySelectorAll(".celeb-img");

//     if (images.length === 0) {
//         console.error("No images found in the celeb-carousel.");
//         return;
//     }

//     gsap.set(images, { y: -200, opacity: 0 });

//     let index = 0;

//     function animateCelebrities() {
//         gsap.to(images[index], {
//             y: 0,
//             opacity: 1,
//             duration: 1.5,
//             ease: "power2.out",
//             onComplete: () => {
//                 gsap.to(images[index], {
//                     y: 200,
//                     opacity: 0,
//                     duration: 1.5,
//                     ease: "power2.in",
//                     delay: 2,
//                     onComplete: () => {
//                         index = (index + 1) % images.length;
//                         animateCelebrities();
//                     }
//                 });
//             }
//         });
//     }

//     animateCelebrities();
// });


// window.addEventListener("load", () => {
//     const images = document.querySelectorAll(".celeb-img");

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

//         tl.to(images[index], {
//             opacity: 1,
//             y: -20,
//             duration: 3,
//             ease: "power1.inOut"
//         })
//         .to(images[index], {
//             y: 0,
//             duration: 2,
//             ease: "sine.inOut"
//         })
//         .to(images[index], {
//             opacity: 0,
//             y: 200,
//             duration: 2,
//             ease: "power1.inOut"
//         });


//     }

//     animateWaveEffect();
// });


window.addEventListener("load", () => {
    const images = document.querySelectorAll(".celeb-img");

    if (images.length === 0) {
        console.error("No images found in the celeb-carousel.");
        return; 
    }

    gsap.set(images, { opacity: 0, y: 200 });

    let index = 0;

    function animateWaveEffect() {
        const tl = gsap.timeline({
            onComplete: () => {
                index = (index + 1) % images.length;
                animateWaveEffect();
            }
        });

        // Animation for each image to follow a wave-like motion
        tl.to(images[index], {
            opacity: 1,
            y: -20,
            duration: 2.5,
            ease: "power1.inOut",
        })
        .to(images[index], {
            y: 10,
            duration: 1,
            ease: "power1.inOut",
        })
        .to(images[index], {
            y: -10,
            duration: 1,
            ease: "power1.inOut",
        })
        .to(images[index], {
            opacity: 0,
            y: 200,
            duration: 2.5,
            ease: "power1.inOut",
        });
    }

    animateWaveEffect();
});
