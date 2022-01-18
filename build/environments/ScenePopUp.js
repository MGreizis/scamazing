import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
import PopUp from '../objects/ClickerPopUp.js';
export default class ScenePopUp extends Scene {
    shouldStart;
    keyboard;
    popUp;
    clickerGame;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.popUp = new PopUp(this.game.canvas.width, this.game.canvas.height);
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
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
        this.popUp.draw(this.game.ctx);
    }
}
//# sourceMappingURL=ScenePopUp.js.map