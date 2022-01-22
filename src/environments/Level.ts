import Game from '../scripts/Game.js';
import Player from '../objects/Player.js';
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
  private shouldStartClickerGame: boolean;

  private shouldStartTestGame: boolean;

  // Player
  // private player: Player;

  // Door
  private cookieDoor: CookieDoor;

  private testDoor: TestDoor;

  private isClickerCompleted: boolean;

  private shouldStartSnake: boolean;

  private snakeDoor: SnakeDoor;

  private snake : Snake;

  private food: Food;

  /**
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    // this.player = new Player(this.game.canvas.width, this.game.canvas.height);

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

  /**
   *
   */
  public processInput(): void {
    if (this.snake.interactsWithDoor(this.cookieDoor)) {
      this.shouldStartClickerGame = true;
    }

    if (this.snake.interactsWithDoor(this.testDoor)) {
      this.shouldStartTestGame = true;
    }

    if (this.snake.interactsWithDoor(this.snakeDoor)) {
      this.shouldStartSnake = true;
    }

    // Move the player
    // this.player.movePlayer();
    this.snake.controlSnake();
  }

  /**
   * @returns null
   */
  public update(): Scene {
    // interaction with door
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

  /**
   *
   */
  public render(): void {
    this.snake.collison(this.game.canvas.width, this.game.canvas.height);
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // Show score
    const score = `Score: ${this.game.getUser().getScore()}`;
    this.game.writeTextToCanvas(score, 30, 10, this.game.canvas.height - 10, 'left', 'white');

    // Draw door
    this.cookieDoor.draw(this.game.ctx);

    this.testDoor.draw(this.game.ctx);

    if (this.game.getUser().getScore() >= 100) {
      this.snakeDoor.draw(this.game.ctx);
    }

    // Draw Player
    // this.player.draw(this.game.ctx);

    this.game.writeTextToCanvas("To enter a door, move your character over it and press 'spacebar'", 30, this.game.canvas.width - 5, this.game.canvas.height - 10, 'right', 'white');

    // Draw each part
    this.snake.drawSnake(this.game.ctx);

    this.food.drawFood(this.game.ctx);
  }
}
