import { WebGLRenderer } from "three";
import Frist from "./Frist";
import GameOver from "./GameOver";
import GameOverGarden from "./GameOverGarden";
import GameOverProspect from "./GameOverProspect";
import Garden from "./Garden";
import GardenGame from "./GardenGame";
import GardenGameInstructions from "./GardenGameInstructions";
import Instructions from "./Instructions";
import Nassau from "./Nassau";
import Poe from "./Poe";
import PoeGame from "./PoeGame";
import PoeGameInstructions from "./PoeGameInstructions";
import Prospect from "./Prospect";
import ProspectGame from "./ProspectGame";
import ProspectGameInstructions from "./ProspectGameInstructions";
import Success from "./Success";
import SuccessGarden from "./SuccessGarden";
import SuccessProspect from "./SuccessProspect";
import Title from "./Title";

// To manage audio
import { AudioListener, Audio, AudioLoader } from 'three';
import { GardenAmbientAudio } from "../audio";
class Scenes {
    constructor() {
        this.scenes = {};
        this.currentScene = undefined;
        this.renderer = undefined;

        // Audio
        this.sounds = {}; 
        this.audioListener = new AudioListener(); 
        // Initialize dictionary of sounds
        this.sounds['gardenambient'] = new Sound(this.audioListener, GardenAmbientAudio, true, true);

        // Minigame/search successes for poe, prospect, and garden
        this.successes = [0, 0, 0];
    }

    // Create scenes
    create() {
        this.renderer = new WebGLRenderer({ antialias: true });
        this.renderer.setSize(640, 480);

        // Initialize dictionary of scenes
        this.scenes['title'] = new Title();
        this.scenes['instructions'] = new Instructions();

        this.scenes['frist'] = new Frist(); 

        this.scenes['prospect'] = new Prospect();
        this.scenes['prospectgame'] = new ProspectGame();
        this.scenes['prospectgameinstructions'] = new ProspectGameInstructions();

        this.scenes['poe'] = new Poe();
        this.scenes['poegameinstructions'] = new PoeGameInstructions();
        this.scenes['poegame'] = new PoeGame();

        this.scenes['nassau'] = new Nassau();

        this.scenes['garden'] = new Garden();
        this.scenes['gardengame'] = new GardenGame();
        this.scenes['gardengameinstructions'] = new GardenGameInstructions();

        this.scenes['gameover'] = new GameOver();
        this.scenes['success'] = new Success();

        this.scenes['gameoverprospect'] = new GameOverProspect();
        this.scenes['successprospect'] = new SuccessProspect();

        this.scenes['gameovergarden'] = new GameOverGarden();
        this.scenes['successgarden'] = new SuccessGarden();

        // Set current scene to title scene
        // this.currentScene = this.scenes['title'];
        this.currentScene = this.scenes['garden'];
        this.currentScene.addEvents();
    }

    // Switches scenes
    switchScene(sceneKey) {
        this.currentScene.removeEvents();
        this.currentScene = this.scenes[sceneKey];
        this.currentScene.addEvents();
    }

    playSound(soundKey, duration, volume) {
        this.sounds[soundKey].play(duration, volume);
    }
}

class Sound {

    constructor(audioListener, audioUrl, isLoop, isAutoplay) {
      this.audio = this.createAudio(audioListener, audioUrl, isLoop);
      this.timeStart = -1;
      this.isPlaying = false;
      this.duration = -1;
      this.updateTimeStart = false;
      this.isLoop = isLoop;
      this.audio.autoplay = isAutoplay;
  
      return this;
    }
  
    createAudio(audioListener, audioUrl, isLoop) {
      const audio = new Audio(audioListener);
      const audioLoader = new AudioLoader();
      audioLoader.load(
        audioUrl,
        function(buffer) {
          audio.setBuffer(buffer);
          audio.setLoop(isLoop);
        }
      );
  
      return audio;
    }
  
    play(duration, volume) {
      this.updateTimeStart = true;
      this.duration = duration;
      this.audio.setVolume(volume);
      if (this.isPlaying) {
        if (!this.isLoop) {
          this.audio.stop();
          this.audio.play();
        }
        return;
      }
  
      this.audio.play();
      this.isPlaying = true;
    }
  
    stop() {
      if (this.isLoop) {
        this.audio.pause();
      }
      else {
        this.audio.stop();
      }
      this.isPlaying = false;
    }
  
    update(time) {
      if (this.updateTimeStart) {
        this.timeStart = time;
        this.updateTimeStart = false;
      }
  
      if (this.isPlaying && time - this.timeStart > this.duration) {
        this.stop();
      }
    }
}

// Singleton pattern in modern JS
const instance = new Scenes();

export default instance;
