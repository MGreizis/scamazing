import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import EndScreen from './EndScreen.js';
export default class SnakeGame extends Scene {
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
            return new EndScreen(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        const line1 = 'This area is still being worked on :)';
        this.game.writeTextToCanvas(line1, 76, centerX, 250, 'center', 'red');
        const msg = "Press 'spacebar' to go back";
        this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'red');
    }
}
//# sourceMappingURL=SnakeGame.js.map