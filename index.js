const buttonClickEffect = document.querySelectorAll(".btn");
for (let i = 0; i < buttonClickEffect.length; i++) {
    buttonClickEffect[i].addEventListener("click", function() {
        buttonClickEffect[i].style.backgroundColor = "green";

    });
}
const specialButtonEffect = document.getElementById("sp-btn").addEventListener("click", function() {
    document.getElementById("sp-btn").style.backgroundColor = "yellow";

});