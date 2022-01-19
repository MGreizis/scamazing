import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
export default class PlayerGotScammed extends Scene {
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
        const line1 = 'You fell for the scam! If an unknown person ever';
        const line2 = 'messages you offering free things,';
        const line3 = 'block and report them. They cannot be trusted!';
        this.game.writeTextToCanvas(line1, 48, centerX, 50, 'center', 'white');
        this.game.writeTextToCanvas(line2, 48, centerX, 150, 'center', 'white');
        this.game.writeTextToCanvas(line3, 48, centerX, 250, 'center', 'white');
        const msg = "Press 'spacebar' to go back to the hub";
        this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'white');
    }
}
//# sourceMappingURL=PlayerGotScammed.js.map