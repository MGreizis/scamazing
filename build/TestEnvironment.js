import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
export default class Environment extends Scene {
    shouldStart;
    keyboard;
    player;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = true;
    }
    processInput() {
        if (this.player.interactsWithDoor) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart === true) {
            return new Environment(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        const line1 = 'This area is still being worked on :)';
        this.game.writeTextToCanvas(line1, 128, centerX, 250, 'center', 'red');
        const msg = "Press 'spacebar' to go back";
        this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'red');
    }
}
//# sourceMappingURL=TestEnvironment.js.map