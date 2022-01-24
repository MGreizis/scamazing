import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import MessagingGame from './MessagingGame.js';
import ClicksLink2 from '../objects/ClicksLink2.js';
import PlayerGotScammed from './PlayerGotScammed.js';
export default class PlayerClicksLink2 extends Scene {
    shouldStart;
    keyboard;
    continuesClicking;
    goesBack;
    clicksLink2;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.clicksLink2 = new ClicksLink2(this.game.canvas.width, this.game.canvas.height);
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
            this.game.getUser().removeScore(50);
            return new PlayerGotScammed(this.game);
        }
        if (this.goesBack) {
            return new MessagingGame(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.clicksLink2.draw(this.game.ctx);
        const line1 = 'Do you want to continue?';
        const line2 = "Press 'Y' for Yes";
        const line3 = "Press 'N' for No";
        this.game.writeTextToCanvas(line1, 24, 200, 50, 'center', 'white');
        this.game.writeTextToCanvas(line2, 24, 105, 100, 'left', 'white');
        this.game.writeTextToCanvas(line3, 24, 105, 150, 'left', 'white');
    }
}
//# sourceMappingURL=PlayerClicksLink2.js.map