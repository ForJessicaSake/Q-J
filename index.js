const buttonClickEffect = document.querySelectorAll(".btn");
for (let i = 0; i < buttonClickEffect.length; i++) {
    buttonClickEffect[i].addEventListener("click", function() {
        buttonClickEffect[i].style.backgroundColor = "green";

    });
}
const specialButtonEffect = document.getElementById("sp-btn").addEventListener("click", function() {
    document.getElementById("sp-btn").style.backgroundColor = "yellow";

});

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};