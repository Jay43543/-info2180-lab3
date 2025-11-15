
document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#gameboard div");
    squares.forEach(square => {
        square.classList.add("square");
    });
});
