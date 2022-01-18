import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
export default class InteractedWithPopUp extends Scene {
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
        this.game.writeTextToCanvas("Don't interact with these kinds of pop-ups, as they most likely", 42, centerX, 50, 'center', 'white');
        this.game.writeTextToCanvas('are scammers attempting to install malware on your computer!', 42, centerX, 100, 'center', 'white');
        this.game.writeTextToCanvas("Press the 'spacebar' to go back to the hub", 50, centerX, this.game.canvas.height - 15, 'center', 'white');
    }
}
//# sourceMappingURL=InteractedWithPopUp.js.map