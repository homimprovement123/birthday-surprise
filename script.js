function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.style.display = "block";

    // Create floating hearts
    for (let i = 0; i < 25; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    const duration = 3 + Math.random() * 3;

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`,
                opacity: 0
            }
        ],
        {
            duration: duration * 1000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
