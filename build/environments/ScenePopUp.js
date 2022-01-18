import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import PopUp from '../objects/ClickerPopUp.js';
import InteractedWithPopUp from './InteractedWithPopUp.js';
import Level from './Level.js';
export default class ScenePopUp extends Scene {
    shouldStart;
    keyboard;
    popUp;
    clickerGame;
    shouldStartInteractedWithPop;
    shouldStartHub;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.shouldStartInteractedWithPop = false;
        this.shouldStartHub = false;
        this.popUp = new PopUp(this.game.canvas.width, this.game.canvas.height);
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_N)) {
            this.shouldStartInteractedWithPop = true;
        }
        else if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
            this.shouldStartHub = true;
        }
    }
    update() {
        if (this.shouldStartInteractedWithPop) {
            this.game.getUser().removeScore();
            return new InteractedWithPopUp(this.game);
        }
        if (this.shouldStartHub) {
            this.game.getUser().addScore();
            return new Level(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.popUp.draw(this.game.ctx);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas("Press the 'C' button to ignore the pop-up", 50, centerX, 50, 'center', 'white');
        this.game.writeTextToCanvas("Press the 'N' button to download the app", 50, centerX, 150, 'center', 'white');
    }
}
//# sourceMappingURL=ScenePopUp.js.map