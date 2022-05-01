import { AudioListener, Audio, AudioLoader } from 'three';
import { GardenAmbientAudio } from "../audio";

class AudioManager { 
    constructor() {
        this.sounds = {}; 
        this.audioListener = new AudioListener(); 

        // Initialize dictionary of sounds
        this.sounds['gardenambient'] = new Sound(this.audioListener, GardenAmbientAudio, true, true);
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
// const instance = new AudioManager();

export default AudioManager;