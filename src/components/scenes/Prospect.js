import { LessStencilFunc, LinearFilter, PerspectiveCamera, Scene, Sprite, SpriteMaterial, TextureLoader, Vector3 } from "three";
import { Scenes } from ".";
import {    Street, 
                // Tower, TowerLogo,
                // Cannon, CannonLogo,
                // Quad, QuadLogo,
                // Colonial, ColonialLogo,
                Ivy, IvyLogo, 
                TigerInn, TigerInnLogo,
                // Cottage, CottageLogo,
                // Cap, CapLogo,
                // Cloister, CloisterLogo,
                // Charter, CharterLogo,
            Vehicles
        } from "../images";
import Player from "../player/player";

class Prospect extends Scene {
    constructor() {
        // Call parent Scene() constructor
        super();
        // Adding in tiles
        // Hashmap for tiles
        this.tileset = new Map();
        // Street tileset details
        this.imageX = 464;
        this.imageY = 464;
        // Number of images per row/column
        this.countX = 29;
        this.countY = 29;

        // Intersection tiles
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
        this.createTile(32, Street, 23, -24)
        // Street tiles
        // Horizontal
        this.createTile(33, Street, 16, -19);
        this.createTile(34, Street, 16, -14);
        this.createTile(35, Street, 16, -20);
        this.createTile(36, Street, 16, -13);
        // Vertical
        this.createTile(37, Street, 14, -17);
        this.createTile(38, Street, 13, -17);
        this.createTile(39, Street, 12, -17);
        this.createTile(40, Street, 19, -17);
        // Bush
        this.createTile(41, Street, 10, -19);
        // Grass
        this.createTile(42, Street, 8, -19);

        // Cars
        // 22 x 19
        this.countX = 22;
        this.countY = 19;
        this.createTile(100, Vehicles, 0, -17);
        this.createTile(101, Vehicles, 0, -18);
        this.createTile(102, Vehicles, 1, -17);
        this.createTile(103, Vehicles, 1, -18);
        this.createTile(104, Vehicles, 2, -17);
        this.createTile(105, Vehicles, 2, -18);
        // this.createTile(106, Vehicles, 3, -17);
        // this.createTile(107, Vehicles, 3, -18);
        
        // Walkable Tiles List
        this.walkable = new Set();
        for (let i = 0; i <= 36; i++) {
            this.walkable.add(i);
        }
        this.walkable.add(42);
        // Scene changing tiles list
        this.sceneChangers = new Set();
        this.sceneChangers.add(32);

        // --- Eating clubs tile sets ---
        // From right to left of the Street
        var currentIndex = 43;
        this.countX = 5;
        this.countY = 4;

        // Tower

        // Cannon 

        // Quad

        // Colonial
        
        // Ivy 
        // 43 - 62
        // for (let i = 0; i >= -(this.countY-1); i--) {
        //     for (let j = 0; j <= this.countX-1; j++) {
        //         this.createTile(currentIndex, Ivy, j, i);
        //         currentIndex++;
        //     }
        // }
        currentIndex = this.createTileSet(currentIndex, Ivy, this.countX, this.countY);

        // Tiger Inn
        // 63 - 82
        // for (let i = 0; i >= -3; i--) {
        //     for (let j = 0; j <= 4; j++) {
        //         this.createTile(currentIndex, TigerInn, j, i);
        //         currentIndex++;
        //     }
        // }
        // currentIndex = this.createTileSet(currentIndex, TigerInn, this.countX, this.countY);

        // Cottage

        // Cap & Gown

        // Cloister

        // Charter
        
        // --- Eating club logos ---
        // var currentIndex = 63;
        // 63 - 68
        this.countX = 3;
        this.countY = 2;

        // currentIndex = this.createTileSet(currentIndex, TowerLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, CannonLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, QuadLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, ColonialLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, IvyLogo, this.countX, this.countY); 
        currentIndex = this.createTileSet(currentIndex, TigerInnLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, CottageLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, CapLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, CloisterLogo, this.countX, this.countY); 
        // currentIndex = this.createTileSet(currentIndex, CharterLogo, this.countX, this.countY); 

        for (let i = 63; i <= 68; i++) {
            this.walkable.add(i);
        }



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

        this.tiles = [
            [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 12, 13, 14, 15, 32, 32],   
            [ 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 22, 23,  8,  9, 10, 11, 32, 32], 
            [ 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 20, 21,  8,  9, 10, 11, 32, 32],
            [ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 18, 19,  8,  9, 10, 11, 32, 32],
            [ 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35,100,102,104, 16, 17,  8,  9, 10, 11, 32, 32],      // road
            [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,101,103,105, 32, 32,  4,  5,  6,  7, 32, 32],
            [ 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,  0,  1,  2,  3, 32, 32],
            [ 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 63, 64, 65, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 41, 41, 41, 41, 39, 38, 37, 40, 32, 32],      // logo
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 66, 67, 68, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // logo
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 63, 42, 42, 42, 67, 42, 42, 42, 41, 41, 42, 42, 42, 43, 44, 45, 46, 47, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // club front
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 48, 49, 50, 51, 52, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
            [ 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 42, 42, 42, 53, 54, 55, 56, 57, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],
            [ 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 59, 60, 61, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 58, 42, 42, 42, 62, 42, 42, 42, 41, 41, 42, 42, 42, 78, 42, 42, 42, 82, 42, 42, 42, 41, 41, 42, 42, 42, 58, 59, 60, 61, 62, 42, 42, 42, 41, 39, 38, 37, 40, 32, 32],      // club back

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

            // Action button to get to minigame
            if (event.code === 'Space') {
                if (this.inActionSpace()) {
                    // Scenes.switchScene('');
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

                // Car on top of road background
                if (index >= 100) {
                    background = new Sprite(this.tileset.get(35));
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
