import CookieDoor from './CookieDoor.js';
import Player from './Player.js';
import Scene from './Scene.js';
import ClickerGame from './ClickerGame.js';
import TestDoor from './TestDoor.js';
import TestEnvironment from './TestEnvironment.js';
export default class Level extends Scene {
    shouldStartClickerGame;
    shouldStartTestGame;
    player;
    cookieDoor;
    testDoor;
    constructor(game) {
        super(game);
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.cookieDoor = new CookieDoor(this.game.canvas.width, this.game.canvas.height);
        this.testDoor = new TestDoor(this.game.canvas.width, this.game.canvas.height);
        this.shouldStartClickerGame = false;
        this.shouldStartTestGame = false;
    }
    processInput() {
        if (this.player.interactsWithDoor(this.cookieDoor)) {
            this.shouldStartClickerGame = true;
        }
        if (this.player.interactsWithDoor(this.testDoor)) {
            this.shouldStartTestGame = true;
        }
        this.player.movePlayer();
    }
    update() {
        if (this.shouldStartClickerGame) {
            return new ClickerGame(this.game);
        }
        if (this.shouldStartTestGame) {
            return new TestEnvironment(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.cookieDoor.draw(this.game.ctx);
        this.testDoor.draw(this.game.ctx);
        this.player.draw(this.game.ctx);
    }
}
//# sourceMappingURL=Level.js.map