import { LinearFilter, PerspectiveCamera, Scene, Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Scenes } from ".";
import { Cannon, CannonGreen, NassauImg, Serene } from "../images";
import Player from "../player/player";

class Nassau extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();
        // Adding in tiles
        // Hashmap for tiles
        this.tileset = new Map();
        // Outdoors tileset details
        this.imageX = 128;
        this.imageY = 432;
        this.countX = 8;
        this.countY = 27;
        // Grass
        this.createTile(0, Serene, 1, -25);
        // Path
        this.createTile(1, Serene, 2, -26);
        this.createTile(2, Serene, 3, -26);
        this.createTile(3, Serene, 4, -26);
        this.createTile(4, Serene, 2, -25);
        this.createTile(5, Serene, 3, -25);
        this.createTile(6, Serene, 4, -25);
        this.createTile(7, Serene, 2, -24);
        this.createTile(8, Serene, 3, -24);
        this.createTile(9, Serene, 4, -24);
        // Advanced Path
        this.createTile(19, Serene, 2, -23)
        this.createTile(20, Serene, 2, -22)
        this.createTile(21, Serene, 3, -23)
        this.createTile(22, Serene, 3, -22)

        // Tree
        this.createTile(10, Serene, 0, -21);
        this.createTile(11, Serene, 1, -21);
        this.createTile(12, Serene, 0, -20);
        this.createTile(13, Serene, 1, -20);
        this.createTile(14, Serene, 0, -19);
        this.createTile(15, Serene, 1, -19);

        // Nassau Hall
        this.countX = 11;
        this.countY = 6;
        var currentIndex = 23;
        for (let i = 0; i >= -5; i--) {
            for (let j = 0; j <= 10; j++) {
                this.createTile(currentIndex, NassauImg, j, i);
                currentIndex++;
            }
        }

        // Cannon
        this.countX = 2;
        this.countY = 2;
        var currentIndex = 89;
        for (let i = 0; i >= -1; i--) {
            for (let j = 0; j <= 1; j++) {
                this.createTile(currentIndex, CannonGreen, j, i);
                currentIndex++;
            }
        }

        // Walkable Tiles List
        this.walkable = new Set();
        for (let i = 0; i <= 9; i++) {
            this.walkable.add(i);
        }
        for (let i = 19; i <= 22; i++) {
            this.walkable.add(i);
        }

        // Scene changing tiles list
        this.sceneChangers = new Set();
        this.sceneChangers.add(2);
        this.sceneChangers.add(4);
        this.sceneChangers.add(5);
        this.sceneChangers.add(6);
        this.sceneChangers.add(8);

        this.tiles = [            
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
            [  0,  0,  0,  7,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  9,  0,  0,  0],
            [  0,  0,  0,  4,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5, 21,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 19,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 12, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 10, 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 10, 11,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  7,  8,  8,  8,  8,  8,  8,  8,  8,  8,  9,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  4,  5,  5,  5,  5,  5,  5,  5,  5,  5,  6,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 14, 15,  0,  0,  0,  0,  4,  5,  5,  5,  5,  5,  5,  5,  5,  5,  6,  0,  0,  0,  0, 14, 15,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 12, 13,  0,  0,  0,  0,  4,  5,  5,  5,  5, 89, 90,  5,  5,  5,  6,  0,  0,  0,  0, 12, 13,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 10, 11,  0,  0,  0,  0,  4,  5,  5,  5,  5, 91, 92,  5,  5,  5,  6,  0,  0,  0,  0, 10, 11,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  4,  5,  5,  5,  5,  5,  5,  5,  5,  5,  6,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  4,  5,  5,  5,  5,  5,  5,  5,  5,  5,  6,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 14, 15,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 14, 15,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 12, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 12, 13,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 10, 11,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 10, 11,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5, 22,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8, 20,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5, 21,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2, 19,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 14, 15, 14, 15, 14, 15, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 14, 15, 14, 15, 14, 15,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 12, 13, 12, 13, 12, 13, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 12, 13, 12, 13, 12, 13,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 10, 11, 10, 11, 10, 11, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 10, 11, 10, 11, 10, 11,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 14, 15, 14, 15, 14, 15, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 14, 15, 14, 15, 14, 15,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 12, 13, 12, 13, 12, 13, 12, 13, 69, 70, 71, 72, 73, 74, 75, 12, 13, 12, 13, 12, 13, 12, 13,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 10, 11, 10, 11, 10, 11, 10, 11, 80, 81, 82, 83, 84, 85, 86, 10, 11, 10, 11, 10, 11, 10, 11,  4,  5,  6,  0,  0,  0],
            [  0,  0,  0,  4,  5,  6, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14, 15, 14,  4,  5,  6,  0,  0,  0],

        ];
        this.width = this.tiles.length;
        this.height = this.tiles[0].length;

        this.createScene();


        // Create player for scene
        this.player = new Player(Nassau);
        this.add(this.player.sprite);
        this.player.setPosition(this.height - 5, this.width - 2, 0);

        // Camera
        this.camera = new PerspectiveCamera();
        // Set up camera
        this.camera.position.set(this.height/2, this.width - 9, 1.6);
        this.camera.lookAt(new Vector3(this.height/2, this.width - 9, 0));
        this.camera.zoom = 0.08;

        // Window resize handler for scene
        this.windowResizeHandler = () => {
            const { innerHeight, innerWidth } = window;
            Scenes.renderer.setSize(innerWidth, innerHeight);
            this.camera.aspect = innerWidth / innerHeight;
            this.camera.updateProjectionMatrix();
        };
        // Arrow key handler
        this.move = (event) => {
            const speed = 0.3;
            if (event.code === 'ArrowUp') {
                const playerPos = this.player.sprite.position;
                // If past map, don't move
                if (Math.round(playerPos.y) >= this.width - 2) {
                    if (this.sceneChangers.has(this.tiles[Math.round(playerPos.y + 0.3 + speed)][Math.round(playerPos.x)])) {
                        Scenes.switchScene('frist');
                    }
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y + 0.3 + speed)][Math.round(playerPos.x)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x, playerPos.y + speed, playerPos.z, "up");
                    this.add(this.player.sprite);
                    if (this.camera.position.y <= this.width - 10) {
                        this.camera.position.y += speed;
                    }
                }
            }
            if (event.code === 'ArrowDown') {
                const playerPos = this.player.sprite.position;
                // If past map, don't move
                if (Math.round(playerPos.y) <= 0.8) {
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y - 0.3 - speed)][Math.round(playerPos.x)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x, playerPos.y - speed, playerPos.z, "down");
                    this.add(this.player.sprite);
                    if (this.camera.position.y >= 9 + speed) {
                        this.camera.position.y -= speed;
                    }
                }
            }
            if (event.code === 'ArrowLeft') {
                const playerPos = this.player.sprite.position;
                if (Math.round(playerPos.x) <= 1) {
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y)][Math.round(playerPos.x - speed - 0.3)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x - speed, playerPos.y, playerPos.z, "left");
                    this.add(this.player.sprite);
                    if (this.camera.position.x >= 17) {
                        this.camera.position.x -= speed;
                    }
                }
            }
            if (event.code === 'ArrowRight') {
                const playerPos = this.player.sprite.position;
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y)][Math.round(playerPos.x + 0.3 + speed)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x + speed, playerPos.y, playerPos.z, "right");
                    this.add(this.player.sprite);
                    if (this.camera.position.x <= this.height - 17) {
                        this.camera.position.x += speed;
                    }
                }
            }
        };
    }
    // Creates texture and material from spritesheet
    createTile(index, source, offsetX, offsetY) {
        // Sample smaller square to get rid of black borders
        const eps = 0.01;

        // Load in image
        const texture = new TextureLoader().load(source);
        texture.minFilter = LinearFilter;
        // Find tile
        texture.offset.x = (1 * offsetX + 0.025) / this.countX;
        texture.offset.y = (-1 *  offsetY + 0.03) / this.countY;
        texture.repeat.x = (1 - eps * 9) / this.countX;
        texture.repeat.y = (1 - eps * 5) / this.countY;
        // texture.wrapS = texture.wrapT = RepeatWrapping;

        const material = new SpriteMaterial({map: texture});

        // Add tile to tileset
        this.tileset.set(index, material);
    }
    // Creates scene based on tiles and tile mapping
    createScene() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                // Set tile and set grass background
                const index = this.tiles[j][i];
                if (index <= 88) {
                    if (index === 56 || index === 65) {
                        var background = new Sprite(this.tileset.get(14));
                        var backbackground = new Sprite(this.tileset.get(0));
                        backbackground.position.set(i, j, -0.00000001);
                        this.add(backbackground)

                    }
                    else if (index === 57 || index === 66) {
                        var background = new Sprite(this.tileset.get(15));
                        var backbackground = new Sprite(this.tileset.get(0));
                        backbackground.position.set(i, j, -0.000000001);
                        this.add(backbackground)

                    }
                    else {
                        var background = new Sprite(this.tileset.get(0));
                    }
                }
                else {
                    var background = new Sprite(this.tileset.get(5));
                }
                const sprite = new Sprite(this.tileset.get(index));
                // Set positions based on tile mapping
                const xPosition = i;
                const yPosition = j;
                background.position.set(xPosition, yPosition, 0);
                this.add(background);
                sprite.position.set(xPosition, yPosition, 0);
                this.add(sprite);
            }
        }
    }

    // Adds events specific to Frist scene
    addEvents() {
        this.windowResizeHandler();
        // Resize event
        window.addEventListener('resize', this.windowResizeHandler, false);
        // Movement with arrow key event
        window.addEventListener('keydown', this.move, false);
    }
    // Removes events specific to Frist scene
    removeEvents() {
        window.removeEventListener('resize', this.windowResizeHandler, false);
        window.removeEventListener('keydown', this.move, false);
    }
}

export default Nassau;