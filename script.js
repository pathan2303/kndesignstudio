const video = document.getElementById('intro-video');
const btn = document.getElementById('exploreBtn');

// 3 second logic
video.addEventListener('timeupdate', () => {
    if (video.currentTime >= 3) btn.style.opacity = "1";
});

function showContent() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
}

// Swiper Init
new Swiper(".imgSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, coverflowEffect: { rotate: 40, depth: 100 } });
new Swiper(".vidSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, coverflowEffect: { rotate: 40, depth: 100 } });
