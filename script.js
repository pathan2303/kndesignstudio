const exploreBtn = document.getElementById("explore-btn");
const introScreen = document.getElementById("intro-screen");
const portfolio = document.getElementById("portfolio");

exploreBtn.addEventListener("click", () => {
    introScreen.style.opacity = "0";

    setTimeout(() => {
        introScreen.style.display = "none";
        portfolio.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 500);
});

/* ==========================
   IMAGE GALLERY
========================== */

const imageWrapper = document.getElementById("image-wrapper");

for (let i = 1; i <= 25; i++) {

    const slide = document.createElement("div");

    slide.className = "swiper-slide";

    slide.innerHTML = `
        <img
            src="assets/project${i}.jpg"
            alt="Project ${i}"
            onclick="openImage('assets/project${i}.jpg')"
            loading="lazy"
        >
    `;

    imageWrapper.appendChild(slide);
}

/* ==========================
   VIDEO GALLERY
========================== */

const videoWrapper = document.getElementById("video-wrapper");

for (let i = 1; i <= 11; i++) {

    const slide = document.createElement("div");

    slide.className = "swiper-slide";

    slide.innerHTML = `
        <video
            muted
            loop
            playsinline
            autoplay
            onclick="openVideo('assets/video${i}.mp4')"
        >
            <source src="assets/video${i}.mp4" type="video/mp4">
        </video>
    `;

    videoWrapper.appendChild(slide);
}

/* ==========================
   IMAGE MODAL
========================== */

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

function openImage(src) {

    modalImage.src = src;

    imageModal.style.display = "flex";
}

document
.querySelector(".close-modal")
.addEventListener("click", () => {

    imageModal.style.display = "none";
});

imageModal.addEventListener("click", (e) => {

    if (e.target === imageModal) {

        imageModal.style.display = "none";
    }
});

/* ==========================
   VIDEO MODAL
========================== */

const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

function openVideo(src) {

    modalVideo.src = src;

    videoModal.style.display = "flex";

    modalVideo.play();
}

document
.querySelector(".close-video")
.addEventListener("click", () => {

    modalVideo.pause();

    videoModal.style.display = "none";
});

videoModal.addEventListener("click", (e) => {

    if (e.target === videoModal) {

        modalVideo.pause();

        videoModal.style.display = "none";
    }
});

/* ==========================
   SWIPERS
========================== */

new Swiper(".imageSwiper", {

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: "auto",

    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    coverflowEffect: {

        rotate: 0,

        stretch: 0,

        depth: 250,

        modifier: 2,

        scale: 0.9,

        slideShadows: true
    }
});

new Swiper(".videoSwiper", {

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: "auto",

    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },

    coverflowEffect: {

        rotate: 0,

        stretch: 0,

        depth: 250,

        modifier: 2,

        scale: 0.9,

        slideShadows: true
    }
});
