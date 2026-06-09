const btn = document.getElementById("explore-btn");

// 3 second logic
setTimeout(() => { btn.style.opacity = "1"; }, 3000);

btn.addEventListener("click", () => {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
});

// Swiper Init
new Swiper(".imgSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, coverflowEffect: { rotate: 40, depth: 100 } });
new Swiper(".vidSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, coverflowEffect: { rotate: 40, depth: 100 } });
