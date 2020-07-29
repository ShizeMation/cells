const width = 100;
const height = 100;

let world = [];
world.length = width * height;
world.fill(false);
let buffer = [...world];
let bufferPos = 0;

let rule = [];
rule.length = 512;
rule.fill(false);

function getCell(x, y) {
    return world[y * width + x];
}

function setCell(x, y, s) {
    world[y * width + x] = s;
}

function flipCell(x, y) {
    let i = y * width + x;
    world[i] = !world[i];
}

function setBuffer(s) {
    if (bufferPos < buffer.length) {
        buffer[bufferPos++] = s;
    }
}

function loadBuffer() {
    world = [...buffer];
    bufferPos = 0;
}

function nextGen(x, y) {
    let combo = 0, pos = 0;
    for (let i = x-1; i <= x+1; i++) {
        for (let j = y-1; j <= y+1; j++) {
            let mx = i % width;
            let my = j % height;
            if (mx < 0) {
                mx += width;
            }
            if (my < 0) {
                my += height;
            }
            if (getCell(mx, my)) {
                combo += 1 << pos;
            }
            pos++;
        }
    }
    return rule[combo];
}

function update() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            setBuffer(nextGen(x, y));
        }
    }
    loadBuffer();
}
