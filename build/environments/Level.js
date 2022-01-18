import CookieDoor from '../objects/CookieDoor.js';
import Player from '../objects/Player.js';
import Scene from './Scene.js';
import ClickerGame from './ClickerGame.js';
import TestDoor from '../objects/TestDoor.js';
import TestEnvironment from './TestEnvironment.js';
export default class Level extends Scene {
    shouldStartClickerGame;
    shouldStartTestGame;
    player;
    cookieDoor;
    testDoor;
    isClickerCompleted;
    constructor(game) {
        super(game);
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.cookieDoor = new CookieDoor(this.game.canvas.width - 50, this.game.canvas.height - 50);
        this.testDoor = new TestDoor(this.game.canvas.width, this.game.canvas.height);
        this.shouldStartClickerGame = false;
        this.shouldStartTestGame = false;
        this.isClickerCompleted = false;
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
        const score = `Score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 36, 120, 50);
        this.cookieDoor.draw(this.game.ctx);
        this.testDoor.draw(this.game.ctx);
        this.player.draw(this.game.ctx);
        this.game.writeTextToCanvas("To enter a door, move your character over it and press 'spacebar'", 30, this.game.canvas.width - 5, this.game.canvas.height - 10, 'right', 'white');
    }
}
//# sourceMappingURL=Level.js.map