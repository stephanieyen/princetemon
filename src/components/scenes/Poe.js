import { LinearFilter, PerspectiveCamera, Scene, Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Scenes } from ".";
import { Bench, Cone, Crane, Dirt, FristSheet, NewRes, Serene } from "../images";
import Player from "../player/player";

class Poe extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();
        // Adding in tiles
        // Hashmap for tiles
        this.tileset = new Map();
        // Frist tileset details
        this.imageX = 144;
        this.imageY = 144;
        // Number of images per row/column
        this.countX = 3;
        this.countY = 3;
        // Grass
        this.createTile(0, FristSheet, 1, 0);
        // Tree 1
        this.createTile(1, FristSheet, 1, -2);
        // Tree 2
        this.createTile(2, FristSheet, 1, -1);
        // Path
        this.createTile(3, FristSheet, 2, -2);
        // Door
        this.createTile(4, FristSheet, 0, 0);
        // Window
        this.createTile(5, FristSheet, 2, -1);
        // Bottom front
        this.createTile(6, FristSheet, 0, -1);
        // Top front
        this.createTile(7, FristSheet, 0, -2);

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
        // Fence
        this.createTile(23, Serene, 2, -19)
        this.createTile(24, Serene, 3, -19)
        this.createTile(25, Serene, 4, -19)
        this.createTile(26, Serene, 2, -18)
        this.createTile(27, Serene, 3, -18)
        this.createTile(28, Serene, 4, -18)
        this.createTile(29, Serene, 2, -17)
        this.createTile(30, Serene, 3, -17)
        this.createTile(31, Serene, 4, -17)

        // Sign for game
        this.createTile(36, Serene, 5, -20);

        // Tileset details
        this.imageX = 192;
        this.imageY = 192;
        this.countX = 3;
        this.countY = 3;
        // Better dirt
        this.createTile(10, Dirt, 1, -2);

        // Tileset details
        this.countX = 3;
        this.countY = 3;
        // Crane
        this.createTile(37, Crane, 0, 0);
        this.createTile(38, Crane, 1, 0);
        this.createTile(39, Crane, 2, 0);
        this.createTile(40, Crane, 0, -1);
        this.createTile(41, Crane, 1, -1);
        this.createTile(42, Crane, 2, -1);
        this.createTile(43, Crane, 0, -2);
        this.createTile(44, Crane, 1, -2);
        this.createTile(45, Crane, 2, -2);

        // Bench
        this.imageX = 112;
        this.imageY = 32;
        this.countX = 7;
        this.countY = 2;
        this.createTile(32, Bench, 1, -1);

        // Cone
        this.countX = 3;
        this.countY = 2;
        this.createTile(46, Cone, 0, 0);
        this.createTile(47, Cone, 0, -1);

        // New Buildings
        this.countX = 4;
        this.countY = 4;
        this.createTile(48, NewRes, 0, 0);
        this.createTile(49, NewRes, 1, 0);
        this.createTile(50, NewRes, 2, 0);
        this.createTile(51, NewRes, 3, 0);
        this.createTile(52, NewRes, 0, -1);
        this.createTile(53, NewRes, 1, -1);
        this.createTile(54, NewRes, 2, -1);
        this.createTile(55, NewRes, 3, -1);
        this.createTile(56, NewRes, 0, -2);
        this.createTile(57, NewRes, 1, -2);
        this.createTile(58, NewRes, 2, -2);
        this.createTile(59, NewRes, 3, -2);
        this.createTile(60, NewRes, 0, -3);
        this.createTile(61, NewRes, 1, -3);
        this.createTile(62, NewRes, 2, -3);
        this.createTile(63, NewRes, 3, -3);

        // Walkable Tiles List
        this.walkable = new Set();
        for (let i = 0; i <= 22; i++) {
            this.walkable.add(i);
        }
        this.sceneChangers = new Set();
        // Scene changing tiles lis
        this.sceneChangers.add(4);
        this.sceneChangers.add(5);
        this.sceneChangers.add(6);

        // Actual tiles for level
        this.tiles = [
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 46, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 47, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0, 32,  0,  0,  0,  0,  0,  0,  0,  0, 32,  0,  0,  0,  0,  0,  7,  8,  8,  8,  8,  8, 20,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  5,  5,  5,  5,  5,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5, 21,  2,  2,  2,  2,  2,  3, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 29, 24, 24, 24, 24, 24, 23, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 46, 10, 10, 37, 38, 39, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 46, 10, 10, 10, 10, 10, 10, 10, 10, 47, 10, 10, 40, 41, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  7,  8,  8,  8, 20,  5,  6, 26, 10, 10, 47, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 43, 44, 45, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  5,  5,  5,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5, 21,  2,  2,  2,  3, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 29, 24, 24, 24, 23, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 46, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 37, 38, 39, 10, 10, 10, 10, 10, 10, 10, 10, 10, 47, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6,  0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 40, 41, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 43, 44, 45, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0, 32,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 46, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 47, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 46, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 48, 49, 50, 51],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 47, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 52, 53, 54, 55],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 32,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 36, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 56, 57, 58, 59],
            [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4,  5,  6, 26, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 60, 61, 62, 63],
        ];
        this.width = this.tiles.length;
        this.height = this.tiles[0].length;

        this.createScene();


        // Create player for scene
        this.player = new Player(Poe);
        this.add(this.player.sprite);
        this.player.setPosition(this.height / 2, 1, 0);
        // Camera
        this.camera = new PerspectiveCamera();
        // Set up camera
        this.camera.position.set(this.height / 2, 9, 1.6);
        this.camera.lookAt(new Vector3(this.height / 2, 9, 0));
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
                if (Math.round(playerPos.y) >= this.width - 1) {
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
                if (Math.round(playerPos.y) <= 1) {
                    if (this.sceneChangers.has(this.tiles[Math.round(playerPos.y - speed - 0.3)][Math.round(playerPos.x)])) {
                        Scenes.switchScene('frist');
                    }
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
                // If past map don't move or switch scene
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
                if (Math.round(playerPos.x) >= this.height - 2) {
                    return;
                }
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

            // Action button to get to minigame
            if (event.code === 'Space') {
                if (this.inActionSpace()) {
                    Scenes.switchScene('poegameinstructions');
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
        texture.offset.x = (1 * offsetX + 0.03) / this.countX;
        texture.offset.y = (-1 *  offsetY + 0.03) / this.countY;
        texture.repeat.x = (1 - eps * 7) / this.countX;
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
                var background;
                if (index <= 35) {
                    background = new Sprite(this.tileset.get(0));
                }
                else {
                    background = new Sprite(this.tileset.get(10));
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

    // Check if right under action space
    inActionSpace() {
        const playerPos = this.player.sprite.position;
        console.log(this.tiles[Math.round(playerPos.y + 1)][Math.round(playerPos.x)]);
        if (this.tiles[Math.round(playerPos.y + 1)][Math.round(playerPos.x)] === 36) {
            return true;
        }
        return false;
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

export default Poe;