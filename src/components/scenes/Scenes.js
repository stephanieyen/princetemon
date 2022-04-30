import { WebGLRenderer } from "three";
import Frist from "./Frist";
import GameOver from "./GameOver";
import GameOverProspect from "./GameOverProspect";
import Garden from "./Garden";
import Nassau from "./Nassau";
import Poe from "./Poe";
import PoeGame from "./PoeGame";
import PoeGameInstructions from "./PoeGameInstructions";
import Prospect from "./Prospect";
import ProspectGame from "./ProspectGame";
import ProspectGameInstructions from "./ProspectGameInstructions";
import Success from "./Success";
import SuccessProspect from "./SuccessProspect";
import Title from "./Title";

class Scenes {
    constructor() {
        this.scenes = {};
        this.currentScene = undefined;
        this.renderer = undefined;
        // Minigame/search successes for poe, prospect, nassau, and garden
        this.successes = [0, 0, 1, 1];
    }

    // Create scenes
    create() {
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.setSize(640, 480);
        // Initialize dictionary of scenes
        this.scenes['title'] = new Title();
        this.scenes['frist'] = new Frist(); 

        this.scenes['prospect'] = new Prospect();
        // this.scenes['prospectgameinstructions'] = new ProspectGameInstructions();
        // this.scenes['prospectgame'] = new ProspectGame();

        this.scenes['poe'] = new Poe();
        this.scenes['poegameinstructions'] = new PoeGameInstructions();
        this.scenes['poegame'] = new PoeGame();
        this.scenes['gameover'] = new GameOver();
        this.scenes['success'] = new Success();

        this.scenes['prospectgame'] = new ProspectGame();
        this.scenes['prospectgameinstructions'] = new ProspectGameInstructions();
        this.scenes['gameoverprospect'] = new GameOverProspect();
        this.scenes['successprospect'] = new SuccessProspect();

        this.scenes['nassau'] = new Nassau();
        this.scenes['garden'] = new Garden();


        // Set current scene to title scene
        this.currentScene = this.scenes['title'];
        this.currentScene.addEvents();
    }

    // Switches scenes
    switchScene(sceneKey) {
        this.currentScene.removeEvents();
        this.currentScene = this.scenes[sceneKey];
        this.currentScene.addEvents();
    }
}

// Singleton pattern in modern JS
const instance = new Scenes();

export default instance;
