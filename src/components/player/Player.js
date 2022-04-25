import { Group, LinearFilter, Sprite, SpriteMaterial, TextureLoader } from "three";
import { Sprites } from "../images";

class Player extends Group {
    constructor(parent) {
        super();
        this.scene = parent;
        //this.texture = this.createTexture();
        // Spritesheet details
        this.imageX = 240;
        this.imageY = 128;
        // Number of images per row/column
        this.countX = 15;
        this.countY = 8;

        this.spritesheet = new Map();
        // Standing up
        this.createTile(0, Sprites, 1, -4);
        // Walking up 1
        this.createTile(1, Sprites, 0, -4);
        // Walking up 2
        this.createTile(2, Sprites, 2, -4);
        // Standing right
        this.createTile(3, Sprites, 1, -5);
        // Walking right 1
        this.createTile(4, Sprites, 0, -5);
        // Walking right 2
        this.createTile(5, Sprites, 2, -5);
        // Standing left
        this.createTile(6, Sprites, 1, -6);
        // Walking left 1
        this.createTile(7, Sprites, 0, -6);
        // Walking left 2
        this.createTile(8, Sprites, 2, -6);
        // Standing down
        this.createTile(9, Sprites, 1, -7);
        // Walking down 1
        this.createTile(10, Sprites, 0, -7);
        // Walking down 2
        this.createTile(11, Sprites, 2, -7);

        this.sprites = new Map();
        for (let i = 0; i < this.spritesheet.size; i++) {
            this.sprites.set(i, new Sprite(this.spritesheet.get(i)));
        }
        this.sprite = this.sprites.get(0);
        // Loop for walking animation
        this.currentLoopIndex = 0;
    }

    setPosition(x, y, z, direction) {
        // Walking animation cycle
        const cycleLoop = [0, 1, 0, 2];
        if (direction === "left") {
            const start = 6;
            this.sprite = this.sprites.get(start + cycleLoop[this.currentLoopIndex]);
            this.updateLoop();
        }
        else if (direction === "right") {
            const start = 3;
            this.sprite = this.sprites.get(start + cycleLoop[this.currentLoopIndex]);
            this.updateLoop();
        }
        else if (direction === "up") {
            const start = 0;
            this.sprite = this.sprites.get(start + cycleLoop[this.currentLoopIndex]);
            this.updateLoop();

        }
        else if (direction === "down") {
            const start = 9;
            this.sprite = this.sprites.get(start + cycleLoop[this.currentLoopIndex]);
            this.updateLoop();

        }
        this.sprite.position.set(x, y, z);
    }

    createTile(index, source, offsetX, offsetY) {
        // Sample smaller square to get rid of black borders
        const eps = 0;

        // Load in image
        const texture = new TextureLoader().load(source);
        texture.minFilter = LinearFilter;
        // Find tile
        texture.offset.x = (1 * offsetX - eps) / this.countX;
        texture.offset.y = (-1 *  offsetY + eps) / this.countY;
        texture.repeat.x = 1 / this.countX;
        texture.repeat.y = (1 - 0.03) / this.countY;
        // texture.wrapS = texture.wrapT = RepeatWrapping;

        const material = new SpriteMaterial({map: texture});

        // Add tile to tileset
        this.spritesheet.set(index, material);
    }

    // Updates animation step
    updateLoop() {
        this.currentLoopIndex = (this.currentLoopIndex + 1) % 4;
    }

}

export default Player;