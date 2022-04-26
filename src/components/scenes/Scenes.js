import { WebGLRenderer } from "three";
import Frist from "./Frist";
import Poe from "./Poe";
import PoeGame from "./PoeGame";
import PoeGameInstructions from "./PoeGameInstructions";
import Prospect from "./Prospect";
import Title from "./Title";

class Scenes {
    constructor() {
        this.scenes = [];
        this.currentScene = undefined;
        this.renderer = undefined;
    }

    // Create scenes
    create() {
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.setSize(640, 480);
        // Initialize array of scenes
        this.scenes[0] = new Title();
        this.scenes[1] = new Frist();
        this.scenes[2] = new Prospect();
        this.scenes[3] = new Poe();
        this.scenes[4] = new PoeGameInstructions();
        this.scenes[5] = new PoeGame();

        // Set current scene to title scene
        this.currentScene = this.scenes[0];
        this.currentScene.addEvents();
    }

    // Switches scenes
    switchScene(sceneNumber) {
        this.currentScene.removeEvents();
        this.currentScene = this.scenes[sceneNumber];
        this.currentScene.addEvents();
    }
}

// Singleton pattern in modern JS
const instance = new Scenes();

export default instance;
