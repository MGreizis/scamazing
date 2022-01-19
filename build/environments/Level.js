import Player from '../objects/Player.js';
import Scene from './Scene.js';
import ClickerGame from './ClickerGame.js';
import CookieDoor from '../objects/CookieDoor.js';
import DiscordDoor from '../objects/DiscordDoor.js';
import SnakeGame from './SnakeGame.js';
import SnakeDoor from '../objects/SnakeDoor.js';
import MessagingGame from './MessagingGame.js';
export default class Level extends Scene {
    shouldStartClickerGame;
    shouldStartDiscord;
    player;
    cookieDoor;
    discordDoor;
    isClickerCompleted;
    shouldStartSnake;
    snakeDoor;
    constructor(game) {
        super(game);
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.cookieDoor = new CookieDoor(this.game.canvas.width - 50, this.game.canvas.height - 50);
        this.discordDoor = new DiscordDoor(this.game.canvas.width, this.game.canvas.height);
        this.snakeDoor = new SnakeDoor(this.game.canvas.width, this.game.canvas.width);
        this.shouldStartClickerGame = false;
        this.shouldStartDiscord = false;
        this.isClickerCompleted = false;
        this.shouldStartSnake = false;
    }
    processInput() {
        if (this.player.interactsWithDoor(this.cookieDoor)) {
            this.shouldStartClickerGame = true;
        }
        if (this.player.interactsWithDoor(this.discordDoor)) {
            this.shouldStartDiscord = true;
        }
        if (this.player.interactsWithDoor(this.snakeDoor)) {
            this.shouldStartSnake = true;
        }
        this.player.movePlayer();
    }
    update() {
        if (this.shouldStartClickerGame) {
            return new ClickerGame(this.game);
        }
        if (this.shouldStartDiscord) {
            return new MessagingGame(this.game);
        }
        if (this.shouldStartSnake) {
            return new SnakeGame(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const score = `Score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 30, 10, this.game.canvas.height - 10, 'left', 'white');
        this.cookieDoor.draw(this.game.ctx);
        this.discordDoor.draw(this.game.ctx);
        if (this.game.getUser().getScore() >= 100) {
            this.snakeDoor.draw(this.game.ctx);
        }
        this.player.draw(this.game.ctx);
        this.game.writeTextToCanvas("To enter a door, move your character over it and press 'spacebar'", 30, this.game.canvas.width - 5, this.game.canvas.height - 10, 'right', 'white');
    }
}
//# sourceMappingURL=Level.js.map