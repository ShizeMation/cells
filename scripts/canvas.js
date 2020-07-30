const surface = document.getElementById("surface");

surface.width = world.width;
surface.height = world.height;

/** @type {CanvasRenderingContext2D} */
const c = surface.getContext("2d");
c.fillStyle = "#aaaaaa";

surface.addEventListener("click", (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = Math.floor((e.clientX-rect.left)/pixelSize);
    let y = Math.floor((e.clientY-rect.top)/pixelSize);
    world.flipCell(x, y);
});

function animate() {
    c.clearRect(0, 0, world.width, world.height);
    for (let x = 0; x < world.width; x++) {
        for (let y = 0; y < world.height; y++) {
            if (world.getCell(x, y)) {
                c.fillRect(x, y, 1, 1);
            }
        }
    }
    world.update();
    setTimeout(function() {
        requestAnimationFrame(animate);
    }, 100);
}
animate();
