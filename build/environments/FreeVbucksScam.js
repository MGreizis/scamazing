import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import PlayerGotScammed from './PlayerGotScammed.js';
import FreeVBucks from '../objects/FreeVBucks.js';
import PlayerIgnores from './PlayerIgnores.js';
export default class FreeVbucksScam extends Scene {
    shouldStart;
    keyboard;
    freevbucks;
    isIgnored;
    isGenerated;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.freevbucks = new FreeVBucks(this.game.canvas.width, this.game.canvas.height);
        this.isIgnored = false;
        this.isGenerated = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_I)) {
            this.isIgnored = true;
        }
        else if (this.keyboard.isKeyDown(KeyListener.KEY_G)) {
            this.isGenerated = true;
        }
    }
    update() {
        if (this.isIgnored) {
            this.game.getUser().addScore(20);
            return new PlayerIgnores(this.game);
        }
        if (this.isGenerated) {
            return new PlayerGotScammed(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.freevbucks.draw(this.game.ctx);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas("Press the 'G' button to generate Vbucks, Press the 'I' button to ignore,", 24, centerX, 50, 'center', 'white');
    }
}
//# sourceMappingURL=FreeVbucksScam.js.map