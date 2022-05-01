import { BoxGeometry, Color, FontLoader, Mesh, MeshBasicMaterial, MeshPhongMaterial, OrthographicCamera, PerspectiveCamera, Scene, TextGeometry, TextureLoader, Vector3 } from "three";
import { Scenes } from ".";
import { PixelFont } from "../fonts";
import { TitleBackground, WoodBlock } from "../images";

class GardenGameInstructions extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();

        // Camera
        this.camera = new PerspectiveCamera();
        // Set up camera
        this.camera.position.set(0, 0, 2.5);
        this.camera.lookAt(new Vector3(0, 0, 0));

        // Set background to a nice color
        // this.background = new Color(0x7ec0ee);

        // Set background to background image
        const bgLoader = new TextureLoader();
        const bgTexture = bgLoader.load(TitleBackground);
        this.background = bgTexture;

        // Add cube to back
        const boxGeometry = new BoxGeometry(2.5, 1, 0.001);
        const boxTexture = new TextureLoader().load(WoodBlock);
        const boxMaterial = new MeshBasicMaterial({map: boxTexture});
        // const boxMaterial = new MeshBasicMaterial({color: 0x9b673c});
        const cube = new Mesh(boxGeometry, boxMaterial);
        cube.position.set(0, 0, 0);
        this.add(cube);

        // Title Text Box
        const fontLoader = new FontLoader();
        fontLoader.load(
            PixelFont,
            function(font) {
                const geometry = new TextGeometry(
                "Prospect Garden Minigame",
                    {
                        font: font,
                        size: 0.1,
                        height: 0
                    }
                );
                const textMesh = new Mesh(geometry, new MeshPhongMaterial({color: 0xffffff}));
                textMesh.position.set(-0.85, 0.25, 0.1);
                // Cannot use this.add since inside new function
                Scenes.scenes['gardengameinstructions'].add(textMesh);
            }
        );
        fontLoader.load(
            PixelFont,
            function(font) {
                const geometry = new TextGeometry(
                "Press the up/down arrow keys to avoid the pirahnas!",
                    {
                        font: font,
                        size: 0.05,
                        height: 0
                    }
                );
                const textMesh = new Mesh(geometry, new MeshPhongMaterial({color: 0xffffff}));
                textMesh.position.set(-0.85, -0, 0.1);
                // Cannot use this.add since inside new function
                Scenes.scenes['gardengameinstructions'].add(textMesh);
            }
        );
        fontLoader.load(
            PixelFont,
            function(font) {
                const geometry = new TextGeometry(
                "If you get hit once, you have to start over!",
                    {
                        font: font,
                        size: 0.05,
                        height: 0
                    }
                );
                const textMesh = new Mesh(geometry, new MeshPhongMaterial({color: 0xffffff}));
                textMesh.position.set(-0.7, -0.12, 0.1);
                // Cannot use this.add since inside new function
                Scenes.scenes['gardengameinstructions'].add(textMesh);
            }
        );
        fontLoader.load(
            PixelFont,
            function(font) {
                const geometry = new TextGeometry(
                "Grab the coin to win!",
                    {
                        font: font,
                        size: 0.05,
                        height: 0
                    }
                );
                const textMesh = new Mesh(geometry, new MeshPhongMaterial({color: 0xffffff}));
                textMesh.position.set(-0.37, -0.25, 0.1);
                // Cannot use this.add since inside new function
                Scenes.scenes['gardengameinstructions'].add(textMesh);
            }
        );
        fontLoader.load(
            PixelFont,
            function(font) {
                const geometry = new TextGeometry(
                "Press space to start and escape to go back",
                    {
                        font: font,
                        size: 0.05,
                        height: 0
                    }
                );
                const textMesh = new Mesh(geometry, new MeshPhongMaterial({color: 0xffffff}));
                textMesh.position.set(-0.8, -0.37, 0.1);
                // Cannot use this.add since inside new function
                Scenes.scenes['gardengameinstructions'].add(textMesh);
            }
        );

        // Window resize handler for scene
        this.windowResizeHandler = () => {
            const { innerHeight, innerWidth } = window;
            Scenes.renderer.setSize(innerWidth, innerHeight);
            this.camera.aspect = innerWidth / innerHeight;
            this.camera.updateProjectionMatrix();
        };

        this.pressSpaceBar = (event) => {
            if (event.key === ' ' || event.code === 'Space') {
                Scenes.switchScene('gardengame');
            }
            if (event.code === 'Escape') {
                Scenes.switchScene('garden');
            }
        };
    }


    addEvents() {
        this.windowResizeHandler();
        // Window resize event
        window.addEventListener('resize', this.windowResizeHandler, false);
        // Space to switch scene
        window.addEventListener('keydown', this.pressSpaceBar, false);
    }

    removeEvents() {
        window.removeEventListener('resize', this.windowResizeHandler, false);
        window.removeEventListener('keydown', this.pressSpaceBar, false);
    }
}

export default GardenGameInstructions;