import {
    Wave
} from './Wave.js'

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(50, 168, 82, 0.4)', 'rgba(168, 50, 83, 0.4)', 'rgba(176, 255, 107, 0.4)']
        this.waves = [];

        for( let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i]
            );

            this.waves[i] = wave;
        }
    }
    
    resize(stageWidth, stageHeight) {
        for(let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for(let i = 0;  i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}