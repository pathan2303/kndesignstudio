const btn = document.getElementById("explore-btn");
setTimeout(() => { btn.style.opacity = "1"; }, 3000);

btn.addEventListener("click", () => {
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
});

function openModal(src) {
    document.getElementById("modalImg").src = src;
    document.getElementById("modal").style.display = "flex";
}

// Sliders (Automatic & Professional)
new Swiper(".imgSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, autoplay: { delay: 2000 }, coverflowEffect: { rotate: 40, depth: 100 } });
new Swiper(".vidSwiper", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", loop: true, autoplay: { delay: 3000 }, coverflowEffect: { rotate: 40, depth: 100 } });
