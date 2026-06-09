const video = document.getElementById('intro-video');
const btn = document.getElementById('exploreBtn');

// Intro logic
video.addEventListener('timeupdate', () => {
    if (video.currentTime >= 3) btn.style.opacity = "1";
});

function showContent() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
}

// Sliders Init
new Swiper(".imgSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, autoplay: { delay: 2500 }, coverflowEffect: { rotate: 40, depth: 100 } });
new Swiper(".vidSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, autoplay: { delay: 3500 }, coverflowEffect: { rotate: 40, depth: 100 } });
