import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Cookie from '../objects/Cookie.js';
import PopUp from '../objects/ClickerPopUp.js';
import ScenePopUp from './ScenePopUp.js';
export default class ClickerGame extends Scene {
    shouldStart;
    keyboard;
    cookie;
    clickX;
    clickY;
    clicks;
    popUp;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.cookie = new Cookie(this.game.canvas.width, this.game.canvas.height);
        this.popUp = new PopUp(this.game.canvas.width, this.game.canvas.height);
        this.clicks = 0;
        this.game.canvas.addEventListener('click', (mouseEvent) => {
            this.clickX = mouseEvent.pageX;
            this.clickY = mouseEvent.pageY;
            if (this.clickX < (this.cookie.getXPos() + this.cookie.getImageWidth())
                && this.clickX > this.cookie.getXPos()
                && this.clickY < (this.cookie.getYPos() + this.cookie.getImageHeight())
                && this.clickY > this.cookie.getYPos()) {
                this.clicks += 1;
            }
        });
    }
    processInput() {
        if (this.clicks === 20) {
            this.shouldStart = true;
        }
    }
    update() {
        if (this.shouldStart) {
            return new ScenePopUp(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas(`Clicks: ${this.clicks}`, 50, centerX, 50, 'center', 'white');
        this.cookie.draw(this.game.ctx);
    }
}
//# sourceMappingURL=ClickerGame.js.map