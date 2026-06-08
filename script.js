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
});
// Intro screen fade out after 6 seconds
setTimeout(() => {
    document.getElementById('intro-screen').style.display = 'none';
}, 6000);

// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
});

// Modal Logic
function openModal(src) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-content').src = src;
}

