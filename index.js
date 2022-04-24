const buttonClickEffect = document.querySelectorAll(".btn");
for (let i = 0; i < buttonClickEffect.length; i++) {
    buttonClickEffect[i].addEventListener("click", function() {
        buttonClickEffect[i].style.backgroundColor = "green";
    });
}
const specialButtonEffect = document
    .getElementById("sp-btn")
    .addEventListener("click", function() {
        document.getElementById("sp-btn").style.backgroundColor = "yellow";
    });

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "130px",
    duration: 2200,
    delay: 200,
    //     reset: true
});

sr.reveal(
    ".main-container, .main-container-two, .main-container-three, .main-container-four, .account-container, .grid-footer-container, busy-2", {}
);
sr.reveal(
    ".main-text, .#sp-btn, .text-box-two, .text-box-three, .text-box2-text, main-container-two", {
        delay: 400,
    }
);
sr.reveal(".account-container, #busy, .main-container-two", { interval: 500 });
sr.reveal(
    ".main-box, .input, .footertext, .main-text, .sp-btn, .text-box2-text,", {
        interval: 500,
    }
);