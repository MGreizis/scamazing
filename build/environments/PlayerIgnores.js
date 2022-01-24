import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
export default class PlayerIgnores extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            return new Level(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        const line1 = 'Congratulations!';
        const line2 = "You didn't fall for the scam, however you could have";
        const line3 = 'handled the situation better by blocking and reporting';
        const line4 = 'the scammer';
        this.game.writeTextToCanvas(line1, 76, centerX, 80, 'center', 'white');
        this.game.writeTextToCanvas(line2, 48, centerX, 175, 'center', 'white');
        this.game.writeTextToCanvas(line3, 48, centerX, 250, 'center', 'white');
        this.game.writeTextToCanvas(line4, 48, centerX, 325, 'center', 'white');
        this.game.writeTextToCanvas("Press 'spacebar' to go back to the hub", 48, centerX, 625, 'center', 'white');
    }
}
//# sourceMappingURL=PlayerIgnores.js.map