document.addEventListener("DOMContentLoaded", () => {
    const exploreBtn = document.getElementById("explore-btn");

    // Fade in button after 4 seconds
    setTimeout(() => {
        exploreBtn.style.opacity = "1";
    }, 4000);

    // Action when clicking Explore
    exploreBtn.addEventListener("click", () => {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("portfolio").style.display = "block";
    });
});// 1. Intro Video Control
const video = document.getElementById('intro-video');
const introScreen = document.getElementById('intro-screen');

video.onended = () => {
    introScreen.style.opacity = '0';
    setTimeout(() => introScreen.style.display = 'none', 1000);
};

// 2. Sliders
const imgSwiper = new Swiper(".imgSwiper", {
    effect: "coverflow", grabCursor: true, centeredSlides: true,
    slidesPerView: "auto", loop: true,
    coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true },
    autoplay: { delay: 2500 }
});

const vidSwiper = new Swiper(".vidSwiper", {
    slidesPerView: 1.2, spaceBetween: 20, centeredSlides: true, loop: true,
    autoplay: { delay: 4000 }
});

// Modal Logic
function openModal(src) { document.getElementById('modalImg').src = src; document.getElementById('imageModal').style.display = 'flex'; }
function closeModal() { document.getElementById('imageModal').style.display = 'none'; }
