function playSound(key) {
    let audio = document.getElementById(`sound_${key}`);
    let keyElment = document.getElementById(key);

    if (audio) {
        audio.currentTime = 0;
        audio.play();

        keyElment.classList.add("active");
        setTimeout(() => keyElment.classList.remove("active"), 600);
    }
}


let keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener("click", () => {
        return playSound(key.id)
    });
});

document.addEventListener("keydown", (elm) => {
    let key = elm.key.toLowerCase();
    playSound(key);
})