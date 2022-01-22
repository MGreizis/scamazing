import Scene from './Scene.js';
import ClickerGame from './ClickerGame.js';
import CookieDoor from '../objects/CookieDoor.js';
import TestDoor from '../objects/TestDoor.js';
import TestEnvironment from './TestEnvironment.js';
import SnakeGame from './SnakeGame.js';
import SnakeDoor from '../objects/SnakeDoor.js';
import Snake from '../objects/Snake.js';
import Food from '../objects/Food.js';
export default class Level extends Scene {
    shouldStartClickerGame;
    shouldStartTestGame;
    cookieDoor;
    testDoor;
    isClickerCompleted;
    shouldStartSnake;
    snakeDoor;
    snake;
    food;
    constructor(game) {
        super(game);
        this.cookieDoor = new CookieDoor(this.game.canvas.width - 50, this.game.canvas.height - 50);
        this.testDoor = new TestDoor(this.game.canvas.width, this.game.canvas.height);
        this.snakeDoor = new SnakeDoor(this.game.canvas.width, this.game.canvas.width);
        this.shouldStartClickerGame = false;
        this.shouldStartTestGame = false;
        this.isClickerCompleted = false;
        this.shouldStartSnake = false;
        this.snake = new Snake();
        this.food = new Food(this.game.canvas.width, this.game.canvas.height);
    }
    processInput() {
        if (this.snake.interactsWithDoor(this.cookieDoor)) {
            this.shouldStartClickerGame = true;
        }
        if (this.snake.interactsWithDoor(this.testDoor)) {
            this.shouldStartTestGame = true;
        }
        if (this.snake.interactsWithDoor(this.snakeDoor)) {
            this.shouldStartSnake = true;
        }
        this.snake.controlSnake();
    }
    update() {
        if (this.shouldStartClickerGame) {
            return new ClickerGame(this.game);
        }
        if (this.shouldStartTestGame) {
            return new TestEnvironment(this.game);
        }
        if (this.shouldStartSnake) {
            return new SnakeGame(this.game);
        }
        this.snake.collison(this.game.canvas.width, this.game.canvas.height);
        setTimeout(() => {
            this.snake.moveSnake(this.food, this.game.canvas.width, this.game.canvas.height);
        }, 100);
        return null;
    }
    render() {
        this.snake.collison(this.game.canvas.width, this.game.canvas.height);
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const score = `Score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 30, 10, this.game.canvas.height - 10, 'left', 'white');
        this.cookieDoor.draw(this.game.ctx);
        this.testDoor.draw(this.game.ctx);
        if (this.game.getUser().getScore() >= 100) {
            this.snakeDoor.draw(this.game.ctx);
        }
        this.game.writeTextToCanvas("To enter a door, move your character over it and press 'spacebar'", 30, this.game.canvas.width - 5, this.game.canvas.height - 10, 'right', 'white');
        this.snake.drawSnake(this.game.ctx);
        this.food.drawFood(this.game.ctx);
    }
}
//# sourceMappingURL=Level.js.map