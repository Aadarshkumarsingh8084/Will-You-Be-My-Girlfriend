function yesClicked() {
    alert("Yay! I Love You! ❤️💖");
}


function moveButton() {
    let button = document.querySelector(".no-button");
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
