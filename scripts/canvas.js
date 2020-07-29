const surface = document.getElementById("surface");

/** @type {CanvasRenderingContext2D} */
const c = surface.getContext("2d");
c.fillStyle = "#aaaaaa";

surface.addEventListener("click", (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = Math.floor((e.clientX-rect.left)/4);
    let y = Math.floor((e.clientY-rect.top)/4);
    flipCell(x, y);
});

function animate() {
    c.clearRect(0, 0, width, height);
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (getCell(x, y)) {
                c.fillRect(x, y, 1, 1);
            }
        }
    }
    update();
    setTimeout(function() {
        requestAnimationFrame(animate);
    }, 100);
}
animate();
