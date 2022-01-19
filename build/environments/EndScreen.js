import KeyListener from '../scripts/KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class EndScreen extends Scene {
    shouldStart;
    keyboard;
    constructor(game) {
        super(game);
        game.reset();
        this.keyboard = new KeyListener();
        this.shouldStart = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_S)) {
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
        this.game.writeTextToCanvas('Congratulations! You are now', 80, centerX, 100, 'center', 'white');
        this.game.writeTextToCanvas('able to identify simple scams and', 80, centerX, 200, 'center', 'white');
        this.game.writeTextToCanvas('not fall for them!', 80, centerX, 300, 'center', 'white');
    }
}
//# sourceMappingURL=EndScreen.js.map