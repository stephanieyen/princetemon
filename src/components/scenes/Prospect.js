import { LessStencilFunc, LinearFilter, PerspectiveCamera, Scene, Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Scenes } from ".";
import {    Street, 
                // Tower, TowerLogo,
                TowerLogo,
                // Cannon, CannonLogo,
                CannonLogo,
                // Quad, QuadLogo,
                QuadLogo,
                // Colonial, ColonialLogo,
                ColonialLogo,
                Ivy, IvyLogo, 
                TigerInn, TigerInnLogo,
                // Cottage, CottageLogo,
                CottageLogo,
                // Cap, CapLogo,
                CapLogo,
                // Cloister, CloisterLogo,
                CloisterLogo,
                // Charter, CharterLogo,
                CharterLogo,
            Vehicles,
            Serene, 
            Dirt
        } from "../images";
import Player from "../player/player";
import Car from "../player/car";
import Maps from "./Maps";

class Prospect extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();
        // Adding in tiles
        // Hashmap for tiles
        this.tileset = new Map();
        this.backgrounds = new Object(); // {} 

        // Serene tileset
        this.countX = 8;
        this.countY = 27;
        // Sign for game
        this.createTile(-1, Serene, 5, -20);

        // Street tileset details
        this.imageX = 464;
        this.imageY = 464;
        // Number of images per row/column
        this.countX = 29;
        this.countY = 29;
        // Intersection
        this.createTile(0, Street, 14, -28)
        this.createTile(1, Street, 15, -28);
        this.createTile(2, Street, 16, -28);
        this.createTile(3, Street, 17, -28);
        this.createTile(4, Street, 14, -27);
        this.createTile(5, Street, 15, -27);
        this.createTile(6, Street, 16, -27);
        this.createTile(7, Street, 17, -27);
        this.createTile(8, Street, 14, -26);
        this.createTile(9, Street, 15, -26);
        this.createTile(10, Street, 16, -26);
        this.createTile(11, Street, 17, -26);
        this.createTile(12, Street, 14, -22);
        this.createTile(13, Street, 15, -22);
        this.createTile(14, Street, 16, -22);
        this.createTile(15, Street, 17, -22);
        this.createTile(16, Street, 12, -26);
        this.createTile(17, Street, 13, -26);
        this.createTile(18, Street, 12, -25);
        this.createTile(19, Street, 13, -25);
        this.createTile(20, Street, 12, -24);
        this.createTile(21, Street, 13, -24);
        this.createTile(22, Street, 12, -23);
        this.createTile(23, Street, 13, -23);
        this.createTile(24, Street, 18, -26);
        this.createTile(25, Street, 19, -26);
        this.createTile(26, Street, 18, -25);
        this.createTile(27, Street, 19, -25);
        this.createTile(28, Street, 18, -24);
        this.createTile(29, Street, 19, -24);
        this.createTile(30, Street, 18, -23);
        this.createTile(31, Street, 19, -23);
        // Sidewalk
        // this.createTile(32, Street, 23, -24);
        this.createTile(32, Street, 20, -24);
        // Road - horizontal
        this.createTile(33, Street, 16, -19);
        this.createTile(34, Street, 16, -14);
        this.createTile(35, Street, 16, -20);
        this.createTile(36, Street, 16, -13);
        // Road - vertical
        this.createTile(37, Street, 14, -17);
        this.createTile(38, Street, 13, -17);
        this.createTile(39, Street, 12, -17);
        this.createTile(40, Street, 19, -17);
        // Bush
        this.createTile(41, Street, 10, -19);
        // Grass
        this.createTile(42, Street, 8, -19);
        // Traffic light facing left 
        // stem from bottom to top
        this.createTile(50, Street, 26, -18);
        this.createTile(51, Street, 26, -19);
        this.createTile(52, Street, 26, -20);
        this.createTile(53, Street, 26, -21);
        // sidewalk background
        for (let i = 50; i <= 53; i++) {
            this.backgrounds[i] = 32;
        }
        // Traffic light facing back
        // stem from bottom to top 
        this.createTile(54, Street, 23, -18); 
        this.createTile(55, Street, 23, -19);
        this.createTile(56, Street, 23, -20);
        this.createTile(57, Street, 23, -21);
        // crosswalk background
        this.backgrounds[54] = 32;
        this.backgrounds[55] = 23;
        this.backgrounds[56] = 21;
        this.backgrounds[57] = 19;
        // arm from left to right (all 2 height)
        this.createTile(58, Street, 24, -20); 
        this.createTile(59, Street, 24, -21); 
        this.createTile(60, Street, 25, -20);
        this.createTile(61, Street, 25, -21);
        // intersection background
        this.backgrounds[58] = this.backgrounds[59] = 8;
        this.backgrounds[60] = this.backgrounds[61] = 9;
        // Traffic light facing front
        // stem from bottom to top
        this.createTile(62, Street, 22, -18); 
        this.createTile(63, Street, 22, -19); 
        this.createTile(64, Street, 22, -20); 
        this.createTile(65, Street, 22, -21); 
        // sidewalk background
        for (let i = 62; i <= 65; i++) {
            this.backgrounds[i] = 32;
        }
        // arm from right to left (all 2 height)
        this.createTile(66, Street, 21, -20);
        this.createTile(67, Street, 21, -21);
        this.createTile(68, Street, 20, -20);
        this.createTile(69, Street, 20, -21);
        // intersection background
        this.backgrounds[66] = this.backgrounds[67] = 40;
        this.backgrounds[68] = this.backgrounds[69] = 37;

        // --- Dirt tile set ---
        this.countX = 3; 
        this.countY = 3;
        // Gravel
        this.createTile(70, Dirt, 1, -2);


        

        // --- Serene tile set ---
        // this.countX = 8;
        // this.countY = 27;
        // Path
        // this.createTile(43, Serene, 2, -25);
        // this.createTile(44, Serene, 3, -25);
        // this.createTile(45, Serene, 4, -25);

        // --- Eating clubs tile sets ---
        // From right to left of the Street
        // var currentIndex = 100;
        // orig 46-245
        this.countX = 5;
        this.countY = 4;
        // currentIndex = this.createTileSet(currentIndex, Tower, this.countX, this.countY); // 46-65
        // currentIndex = this.createTileSet(currentIndex, Cannon, this.countX, this.countY); // 66-85
        // currentIndex = this.createTileSet(currentIndex, Quad, this.countX, this.countY); // 86-105
        // currentIndex = this.createTileSet(currentIndex, Colonial, this.countX, this.countY); // 106-125
        currentIndex = this.createTileSet(currentIndex, Ivy, this.countX, this.countY); // 126-145
        // currentIndex = this.createTileSet(currentIndex, TigerInn, this.countX, this.countY); // 146-165
        // currentIndex = this.createTileSet(currentIndex, Cottage, this.countX, this.countY); // 166-185
        // currentIndex = this.createTileSet(currentIndex, Cap, this.countX, this.countY); // 186-205
        // currentIndex = this.createTileSet(currentIndex, Cloister, this.countX, this.countY); // 206-225
        // currentIndex = this.createTileSet(currentIndex, Charter, this.countX, this.countY); // 226-245
        
        // ----- Eating club logo tile sets -----
        var currentIndex = 246;
        this.countX = 3;
        this.countY = 2;
        currentIndex = this.createTileSet(currentIndex, TowerLogo, this.countX, this.countY); // 246-251
        currentIndex = this.createTileSet(currentIndex, CannonLogo, this.countX, this.countY); // 252-257
        currentIndex = this.createTileSet(currentIndex, QuadLogo, this.countX, this.countY); // 258-263
        currentIndex = this.createTileSet(currentIndex, ColonialLogo, this.countX, this.countY); // 264-269
        currentIndex = this.createTileSet(currentIndex, IvyLogo, this.countX, this.countY); // 270-275
        currentIndex = this.createTileSet(currentIndex, TigerInnLogo, this.countX, this.countY); // 276-281
        currentIndex = this.createTileSet(currentIndex, CottageLogo, this.countX, this.countY); // 282-287
        currentIndex = this.createTileSet(currentIndex, CapLogo, this.countX, this.countY); // 288-293
        currentIndex = this.createTileSet(currentIndex, CloisterLogo, this.countX, this.countY); // 294-299
        currentIndex = this.createTileSet(currentIndex, CharterLogo, this.countX, this.countY); // 300-305

        // --- Vehicle tile set ---
        // Cars
        // this.backgrounds = new Object(); // {} 
        // // 22 x 19
        // this.countX = 22;
        // this.countY = 19;
        // this.createTile(100, Vehicles, 0, -17);
        // this.createTile(101, Vehicles, 0, -18);
        // this.createTile(102, Vehicles, 1, -17);
        // this.createTile(103, Vehicles, 1, -18);
        // this.createTile(104, Vehicles, 2, -17);
        // this.createTile(105, Vehicles, 2, -18);
        // // Car body on top of road background
        // for (let i = 100; i <= 105; i++) {
        //     this.backgrounds[i] = 35;
        // }
        // this.backgrounds[101] = this.backgrounds[103] = this.backgrounds[105] = 32;
        // this.createTile(106, Vehicles, 3, -17);
        // this.createTile(107, Vehicles, 3, -18);

        // ----- Identifying walkable tiles -----
        this.walkable = new Set();
        for (let i = 0; i <= 36; i++) { // intersection, sidewalk, road
            this.walkable.add(i);
        }
        this.walkable.add(42); // grass
        for (let i = 63; i <= 68; i++) { // eating club logos 
            this.walkable.add(i);
        }
        // path
        // ----- Identifying scene-changing tiles -----
        this.sceneChangers = new Set();
        this.sceneChangers.add(32); // sidewalk

        // Actual tiles for level
        // this.tiles = [
        //     [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 12, 13, 14, 15, 32, 32],
        //     [ 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 22, 23,  8,  9, 10, 11, 32, 32],
        //     [ 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 20, 21,  8,  9, 10, 11, 32, 32],
        //     [ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 18, 19,  8,  9, 10, 11, 32, 32],
        //     [ 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 16, 17,  8,  9, 10, 11, 32, 32],
        //     [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  4,  5,  6,  7, 32, 32],
        //     [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  0,  1,  2,  3, 32, 32],
        //     [ 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 39, 38, 37, 40, 32, 32],
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],

            
        // ];

        // this.tiles = [
        //     [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 12, 13, 14, 15, 32, 32],   
        //     [ 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 22, 23,  8,  9, 10, 11, 32, 32], 
        //     [ 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 20, 21,  8,  9, 10, 11, 32, 32],
        //     [ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 18, 19,  8,  9, 10, 11, 32, 32],
        //     [ 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35,100,102,104, 16, 17,  8,  9, 10, 11, 32, 32],      // road
        //     [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,101,103,105, 32, 32,  4,  5,  6,  7, 32, 32],
        //     [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  0,  1,  2,  3, 32, 32],
        //     [ 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 63, 64, 65, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 39, 38, 37, 40, 32, 32],      // logo
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 66, 67, 68, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // logo
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42,200,201,202, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // path
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // path
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 63, 42, 42, 42, 67, 42, 42, 42, 41, 41, 42, 42, 42, 43, 44, 45, 46, 47, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // club front
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 48, 49, 50, 51, 52, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
        //     [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 53, 54, 55, 56, 57, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
        //     [ 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 59, 60, 61, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 78, 42, 42, 42, 82, 42, 42, 42, 41, 41, 42, 42, 42, 58, 59, 60, 61, 62, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // club back

        //     // to mark eating clubs
        //     // 0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   T   T   T   T   T   0   0   0   0   0   0   0   0   I   I   I   I   I   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   Q   Q   Q   Q   Q   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   T   T   T   T   T   0   0   0   0   0   0   0   0   0   0     
        // ];

        this.tiles = [
            [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 12, 13, 14, 15, 50, 32],   
            [ 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 22, 55,  8,  9, 10, 11, 51, 32], 
            [ 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, -1, 34, 34, 34, 34, 20, 56, 58, 60, 10, 11, 52, 32],
            [ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 18, 57, 59, 61, 10, 11, 53, 32],      
            [ 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35,100,102,104, 16, 17,  8,  9, 10, 11, 32, 32],      // road
            [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 70, 70, 70, 32, 32, 32,101,103,105, 70, 70,  4,  5,  6,  7, 62, 32],
            [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  0,  1,  2,  3, 63, 32],      // sidewalk
            [ 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,264,265,266, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,258,259,260, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,252,253,254, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,246,247,248, 41, 41, 41, 41, 41, 39, 38, 68, 66, 64, 32],      // logo
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42,267,268,269, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42,261,262,263, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42,255,256,257, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42,249,250,251, 42, 42, 42, 42, 41, 39, 38, 69, 67, 65, 32],      // logo
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 43, 44, 45, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 43, 44, 45, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 43, 44, 45, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 32, 32, 32, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // path
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 43, 44, 45, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 43, 44, 45, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 43, 44, 45, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 32, 32, 45, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // path
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 63, 42, 42, 42, 67, 42, 42, 42, 41, 41, 42, 42, 42, 46, 47, 48, 49, 50, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // club front
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 51, 52, 53, 54, 55, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 56, 57, 58, 59, 60, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
            [ 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 59, 60, 61, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 78, 42, 42, 42, 82, 42, 42, 42, 41, 41, 42, 42, 42, 61, 62, 63, 64, 65, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // club back

            // to mark eating clubs
            // 0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   T   T   T   T   T   0   0   0   0   0   0   0   0   I   I   I   I   I   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   Q   Q   Q   Q   Q   0   0   0   0   0   0   0   0   C   C   C   C   C   0   0   0   0   0   0   0   0   T   T   T   T   T   0   0   0   0   0   0   0   0   0   0     
        ];
        
        
        this.width = this.tiles.length;
        this.height = this.tiles[0].length;

        this.createScene();


        // Create player for scene
        this.player = new Player(Prospect);
        this.add(this.player.sprite);
        this.player.setPosition(this.height - 1, 3, 0);

        // Car
        
        this.car = new Car(Prospect);
        this.add(this.car.getSprite());
        this.car.setPosition(this.height - 3, 4, 0);

        // Camera
        this.camera = new PerspectiveCamera();
        // Set up camera
        this.camera.position.set(this.height - 11, 3, 1.6);
        this.camera.lookAt(new Vector3(this.height - 11, 3, 0));
        // this.camera.zoom = 0.08;
        this.camera.zoom = 0.04;

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
                if (Math.round(playerPos.y) >= this.width) {
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y + 0.3 + speed)][Math.round(playerPos.x)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x, playerPos.y + speed, playerPos.z, "up");
                    this.add(this.player.sprite);
                    if (this.camera.position.y <= this.width - 5) {
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
                if (Math.round(playerPos.x) >= this.height - 1) {
                    if (this.sceneChangers.has(this.tiles[Math.round(playerPos.y)][Math.round(playerPos.x + 0.3 + speed)])) {
                        Scenes.switchScene('frist');
                    }
                    return;
                }
                // Update player position and camera if tile is walkable
                if (this.walkable.has(this.tiles[Math.round(playerPos.y)][Math.round(playerPos.x + 0.3 + speed)])) {
                    this.remove(this.player.sprite);
                    this.player.setPosition(playerPos.x + speed, playerPos.y, playerPos.z, "right");
                    this.add(this.player.sprite);
                    if (this.camera.position.x <= this.height - 10) {
                        this.camera.position.x += speed;
                    }
                }
            }
            // Map event
            if (event.code === 'KeyM' || event.key === 'm') {
                const map = new Maps('prospect');
                console.log(map);
                Scenes.scenes['map'] = map;
                Scenes.switchScene('map');
            }

            // Action button to get to minigame
            if (event.code === 'Space') {
                if (this.inActionSpace(-1)) {
                    Scenes.switchScene('prospectgameinstructions');
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
        texture.offset.x = (1 * offsetX + 0.03 ) / this.countX;
        texture.offset.y = (-1 *  offsetY + 0.05) / this.countY;
        texture.repeat.x = (1 - eps * 10) / this.countX;
        texture.repeat.y = (1 - eps * 10) / this.countY;
        // texture.wrapS = texture.wrapT = RepeatWrapping;

        const material = new SpriteMaterial({map: texture});

        // Add tile to tileset
        this.tileset.set(index, material);
    }

    createTileSet(currentIndex, source, countX, countY) {
        for (let i = 0; i >= -(countY-1); i--) {
            for (let j = 0; j <= countX-1; j++) {
                this.createTile(currentIndex, source, j, i);
                currentIndex++;
            }
        }
        return currentIndex;
    }

    // Creates scene based on tiles and tile mapping
    createScene() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                // Set tile and set grass background
                const index = this.tiles[j][i];
                let background = new Sprite(this.tileset.get(42));

                // Apply backgrounds
                if (index in this.backgrounds) { // check for key 
                    background = new Sprite(this.tileset.get(this.backgrounds[index]));
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
    inActionSpace(tile) {
        const playerPos = this.player.sprite.position;
        console.log(this.tiles[Math.round(playerPos.y + 1)][Math.round(playerPos.x)]);
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

export default Prospect;
