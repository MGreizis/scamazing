import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
import Cookie from './Cookie.js';
export default class ClickerGame extends Scene {
    shouldStart;
    keyboard;
    cookie;
    clickX;
    clickY;
    clicks;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.cookie = new Cookie(this.game.canvas.width, this.game.canvas.height);
        this.clicks = 0;
        this.game.canvas.addEventListener('click', (mouseEvent) => {
            this.clickX = mouseEvent.pageX;
            this.clickY = mouseEvent.pageY;
            if (this.clickX < (this.cookie.getXPos() + this.cookie.getImageWidth())
                && this.clickX > this.cookie.getXPos()
                && this.clickY < (this.cookie.getYPos() + this.cookie.getImageHeight())
                && this.clickY > this.cookie.getYPos()) {
                this.clicks += 1;
                console.log(this.clicks);
            }
        });
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
        this.game.writeTextToCanvas(`Clicks: ${this.clicks}`, 50, centerX, 50, 'center', 'black');
        this.cookie.draw(this.game.ctx);
    }
}
//# sourceMappingURL=ClickerGame.js.map