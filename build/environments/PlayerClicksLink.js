import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import ClicksLink1 from '../objects/ClicksLink1.js';
import MessagingGame from './MessagingGame.js';
import PlayerClicksLink2 from './PlayerClicksLink2.js';
export default class PlayerClicksLink extends Scene {
    shouldStart;
    keyboard;
    continuesClicking;
    goesBack;
    clicksLink1;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.clicksLink1 = new ClicksLink1(this.game.canvas.width, this.game.canvas.height);
        this.continuesClicking = false;
        this.goesBack = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_Y)) {
            this.continuesClicking = true;
        }
        else if (this.keyboard.isKeyDown(KeyListener.KEY_N)) {
            this.goesBack = true;
        }
    }
    update() {
        if (this.continuesClicking) {
            return new PlayerClicksLink2(this.game);
        }
        if (this.goesBack) {
            return new MessagingGame(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.clicksLink1.draw(this.game.ctx);
        const centerX = this.game.canvas.width / 2;
        const line1 = "Do you want to continue? Press 'Y' for Yes, Press 'N' for No";
        this.game.writeTextToCanvas(line1, 24, centerX, 50, 'center', 'white');
    }
}
//# sourceMappingURL=PlayerClicksLink.js.map