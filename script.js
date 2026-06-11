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

const videoUrls = [
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155584/video1_eocrwq.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155582/video2_bvksbe.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155590/video3_a9eii8.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155581/Video4_a7rlta.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155567/video5_hjbhna.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155558/video6_fqbavm.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155564/video7_xn4sw5.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155565/video8_eatwcm.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155567/video9_k6xr0g.mp4",
"https://res.cloudinary.com/dbm3hzq94/video/upload/v1781155569/video10_atbg0l.mp4"
];

const videoWrapper = document.getElementById("video-wrapper");

videoUrls.forEach((url) => {

    const slide = document.createElement("div");

    slide.className = "swiper-slide";

    slide.innerHTML = `
        <video
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            onclick="openVideo('${url}')"
        >
            <source src="${url}" type="video/mp4">
        </video>
    `;

    videoWrapper.appendChild(slide);

});
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
