import { BoxGeometry, FontLoader, LinearFilter, Mesh, MeshBasicMaterial, MeshPhongMaterial, PerspectiveCamera, Scene, Sprite, SpriteMaterial, TextGeometry, TextureLoader, Vector3 } from "three";
import { Scenes } from ".";
import { PixelFont } from "../fonts";
import { FristBig, Serene, Sprites } from "../images";
import Player from "../player/player";
import Maps from "./Maps";
import Rewards from "./Rewards";

class Indoors extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();
        // Dialogue checker
        this.dialogueHappened = false;

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
        // Tree
        this.createTile(10, Serene, 0, -21);
        this.createTile(11, Serene, 1, -21);
        this.createTile(12, Serene, 0, -20);
        this.createTile(13, Serene, 1, -20);
        this.createTile(14, Serene, 0, -19);
        this.createTile(15, Serene, 1, -19);

        // Walkable Tiles List
        this.walkable = new Set();
        for (let i = 0; i <= 9; i++) {
            this.walkable.add(i);
        }

        // Actual tiles for level
        this.tiles = [
        ];
        this.width = this.tiles.length;
        this.height = this.tiles[0].length;

        this.createScene();


        // Create player for scene
        this.player = new Player(Frist);
        this.add(this.player.sprite);
        this.player.setPosition(this.height / 2, 1, 0);

        // Camera
        this.camera = new PerspectiveCamera();
        // Set up camera
        // this.camera.position.set(this.height / 2, 9, 1.6);
        // this.camera.lookAt(new Vector3(this.height / 2, 9, 0));
        this.camera.position.set(this.height / 2, 1, 1.6);
        this.camera.lookAt(new Vector3(this.height / 2, 1, 0));
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
            const speed = 0.5;
            if (event.code === 'ArrowUp') {
                const playerPos = this.player.sprite.position;
                // If past map, don't move
                if (Math.round(playerPos.y) >= this.width - 1 ) {
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y + 0.3 + speed)][Math.round(playerPos.x)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x, playerPos.y + speed, playerPos.z, "up");
                    this.add(this.player.sprite);
                    // if (this.camera.position.y <= this.width - 10) {
                    //     this.camera.position.y += speed;
                    // }
                    if (this.camera.position.y <= this.width) {
                        this.camera.position.y += speed;
                    }
                }
            }
            if (event.code === 'ArrowDown') {
                const playerPos = this.player.sprite.position;
                // If past map, don't move
                if (Math.round(playerPos.y) <= 1) {
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y - speed)][Math.round(playerPos.x)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x, playerPos.y - speed, playerPos.z, "down");
                    this.add(this.player.sprite);
                    // if (this.camera.position.y >= 9 + speed) {
                    //     this.camera.position.y -= speed;
                    // }
                    if (this.camera.position.y >= 0) {
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
                    // if (this.camera.position.x >= 17) {
                    //     this.camera.position.x -= speed;
                    // }
                    if (this.camera.position.x >= 0) {
                        this.camera.position.x -= speed;
                    }
                }
            }
            if (event.code === 'ArrowRight') {
                const playerPos = this.player.sprite.position;
                if (Math.round(playerPos.x) >= this.height - 1) {
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y)][Math.round(playerPos.x + 0.3 + speed)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x + speed, playerPos.y, playerPos.z, "right");
                    this.add(this.player.sprite);
                    // if (this.camera.position.x <= this.height - 17) {
                    //     this.camera.position.x += speed;
                    // }
                    if (this.camera.position.x <= this.height) {
                        this.camera.position.x += speed;
                    }
                }
            }
            // Zoom out
            if (event.code === 'KeyZ' || event.key === 'z') {
                this.camera.zoom = 0.03;
                this.windowResizeHandler();
            }
            // Zoom in
            if (event.code === 'KeyX' || event.key === 'x') {
                this.camera.zoom = 0.08;
                this.windowResizeHandler();
            }
            // Rewards event
            if (event.code === 'KeyR' || event.key === 'r') {
                const rewards = new Rewards('frist');
                Scenes.scenes['rewards'] = rewards;
                Scenes.switchScene('rewards');
            }
            // Dialogue event
            if (event.code === 'Space' || event.key === ' ') {
                if (this.inActionSpace(104) && !this.dialogueHappened) {
                    this.startDialogue();
                }
            }
            // Camera movement
            if (event.code === 'KeyW' || event.key === 'w') {
                if (this.camera.position.y <= this.width) {
                    this.camera.position.y += speed;
                }
            }
            if (event.code === 'KeyS' || event.key === 's') {
                if (this.camera.position.y >= 0) {
                    this.camera.position.y -= speed;
                }
            }
            if (event.code === 'KeyA' || event.key === 'a') {
                if (this.camera.position.x >= 0) {
                    this.camera.position.x -= speed;
                }
            }
            if (event.code === 'KeyD' || event.key === 'd') {
                if (this.camera.position.x <= this.height) {
                    this.camera.position.x += speed;
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
        texture.offset.y = (-1 *  offsetY + 0.03) / this.countY;
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
                const background = new Sprite(this.tileset.get(0));
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
    inActionSpace(tile) {
        const playerPos = this.player.sprite.position;
        if (this.tiles[Math.round(playerPos.y + 1)][Math.round(playerPos.x)] === tile) {
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

export default Indoors;
