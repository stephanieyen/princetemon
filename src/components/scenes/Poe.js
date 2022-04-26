import { LinearFilter, OrthographicCamera, PerspectiveCamera, Scene, Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Scenes } from ".";
import { FristSheet, Serene } from "../images";
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
        // Better path
        this.createTile(3, Serene, 2, -25);
        this.createTile(2, Serene, 3, -25);
        this.createTile(1, Serene, 4, -25);
        // Better grass
        this.createTile(8, Serene, 1, -25);

        // House
        this.createTile(10, Serene, 0, -9);
        this.createTile(11, Serene, 1, -9);
        this.createTile(12, Serene, 2, -9);
        this.createTile(13, Serene, 3, -9);
        this.createTile(14, Serene, 4, -9);
        this.createTile(15, Serene, 0, -10);
        this.createTile(16, Serene, 1, -10);
        this.createTile(17, Serene, 2, -10);
        this.createTile(18, Serene, 3, -10);
        this.createTile(19, Serene, 4, -10);
        this.createTile(20, Serene, 0, -11);
        this.createTile(21, Serene, 1, -11);
        this.createTile(22, Serene, 2, -11);
        this.createTile(23, Serene, 3, -11);
        this.createTile(24, Serene, 4, -11);
        this.createTile(25, Serene, 0, -12);
        this.createTile(26, Serene, 1, -12);
        this.createTile(27, Serene, 2, -12);
        this.createTile(28, Serene, 3, -12);
        this.createTile(29, Serene, 4, -12);
        // Better tree
        this.createTile(30, Serene, 0, -21);
        this.createTile(31, Serene, 1, -21);
        this.createTile(32, Serene, 0, -20);
        this.createTile(33, Serene, 1, -20);
        this.createTile(34, Serene, 0, -19);
        this.createTile(35, Serene, 1, -19);
        // Sign for game
        this.createTile(36, Serene, 5, -20);

        // Walkable Tiles List
        this.walkable = new Set();
        this.walkable.add(3);
        this.walkable.add(8);
        this.walkable.add(2);
        this.walkable.add(1);

        // Scene changing tiles list
        this.sceneChangers = new Set();
        this.sceneChangers.add(3);
        this.sceneChangers.add(2);
        this.sceneChangers.add(1);
        this.sceneChangers.add(8);

        // Actual tiles for level
        this.tiles = [
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 36, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [32,33,32,33,32,33, 8, 8, 8, 8, 8, 8, 8, 8, 8,10,11,12,13,14, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [30,31,30,31,30,31, 8, 8, 8, 8, 8, 8, 8, 8, 8,15,16,17,18,19, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [34,35,34,35,34,35, 8, 8, 8, 8, 8, 8, 8, 8, 8,20,21,22,23,24, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [32,33,32,33,32,33, 8, 8, 8, 8, 8, 8, 8, 8, 8,25,26,27,28,29, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [30,31,30,31,30,31, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [34,35,34,35,34,35, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [32,33,32,33,32,33, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [30,31,30,31,30,31, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 2, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [ 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 2, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            [34,35,34,35,34,35, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [32,33,32,33,32,33, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [30,31,30,31,30,31, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [34,35,34,35,34,35, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [32,33,32,33,32,33, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [30,31,30,31,30,31, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [34,35,34,35,34,35, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [32,33,32,33,32,33, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [30,31,30,31,30,31, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 2, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [34,35,34,35,34,35, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35],
            [32,33,32,33,32,33, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 32,33,32,33,32,33],
            [30,31,30,31,30,31, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 30,31,30,31,30,31],
            [34,35,34,35,34,35, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 34,35,34,35,34,35]
        ];
        this.width = this.tiles.length;
        this.height = this.tiles[0].length;

        this.createScene();


        // Create player for scene
        this.player = new Player(Poe);
        this.add(this.player.sprite);
        this.player.setPosition(4, 19, 0);

        // Camera
        this.camera = new PerspectiveCamera();
        // Set up camera
        this.camera.position.set(4, 19, 1.6);
        this.camera.lookAt(new Vector3(4, 19, 0));
        this.camera.zoom = 0.12;

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
                if (Math.round(playerPos.y) >= 32 ) {
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y + 0.3 + speed)][Math.round(playerPos.x)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x, playerPos.y + speed, playerPos.z, "up");
                    this.add(this.player.sprite);
                    if (this.camera.position.y <= this.height - 14) {
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
                    if (this.camera.position.y >= 6) {
                        this.camera.position.y -= speed;
                    }
                }
            }
            if (event.code === 'ArrowLeft') {
                const playerPos = this.player.sprite.position;
                // If past map don't move or switch scene
                if (Math.round(playerPos.x) <= 1) {
                    if (this.sceneChangers.has(this.tiles[Math.round(playerPos.y)][Math.round(playerPos.x - speed - 0.3)])) {
                        Scenes.switchScene(1);
                    }
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y)][Math.round(playerPos.x - speed - 0.3)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x - speed, playerPos.y, playerPos.z, "left");
                    this.add(this.player.sprite);
                    if (this.camera.position.x >= 11) {
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
                    if (this.camera.position.x <= this.width - 6) {
                        this.camera.position.x += speed;
                    }
                }
            }

            // Action button to get to minigame
            if (event.code === 'Space') {
                if (this.inActionSpace()) {
                    Scenes.switchScene(4);
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
        texture.offset.x = (1 * offsetX) / this.countX;
        texture.offset.y = (-1 *  offsetY) / this.countY;
        texture.repeat.x = (1 - eps * 3) / this.countX;
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
                const background = new Sprite(this.tileset.get(8));
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
