function World(w, h) {
    this.width = w;
    this.height = h;

    this.world = [];
    this.world.length = w * h;
    this.world.fill(false);

    this.buffer = [...this.world];
    this.bufferPos = 0;
    
    this.rule = [];
    this.rule.length = 512;
    this.rule.fill(false);
}

World.prototype.getCell = function(x, y) {
    return this.world[y * this.width + x];
};

World.prototype.setCell = function(x, y, s) {
    this.world[y * this.width + x] = s;
};

World.prototype.flipCell = function(x, y) {
    let i = y * this.width + x;
    this.world[i] = !this.world[i];
};

World.prototype.setBuffer = function(s) {
    if (this.bufferPos < this.buffer.length) {
        this.buffer[this.bufferPos++] = s;
    }
};

World.prototype.loadBuffer = function() {
    this.world = [...this.buffer];
    this.bufferPos = 0;
};

World.prototype.nextGen = function(x, y) {
    let combo = 0, pos = 0;
    for (let j = y+1; j >= y-1; j--) {
        for (let i = x+1; i >= x-1; i--) {
            let mx = i % this.width;
            let my = j % this.height;
            if (mx < 0) {
                mx += this.width;
            }
            if (my < 0) {
                my += this.height;
            }
            if (this.getCell(mx, my)) {
                combo += 1 << pos;
            }
            pos++;
        }
    }
    return this.rule[combo];
};

World.prototype.update = function() {
    for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            this.setBuffer(this.nextGen(x, y));
        }
    }
    this.loadBuffer();
};
