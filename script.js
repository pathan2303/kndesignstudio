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

