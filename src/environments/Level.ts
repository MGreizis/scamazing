import CookieDoor from '../objects/CookieDoor.js';
import Game from '../scripts/Game.js';
import Player from '../objects/Player.js';
import Scene from './Scene.js';
import ClickerGame from './ClickerGame.js';
import TestDoor from '../objects/TestDoor.js';
import TestEnvironment from './TestEnvironment.js';

export default class Level extends Scene {
  private shouldStartClickerGame: boolean;

  private shouldStartTestGame: boolean;

  // Player
  private player: Player;

  // Door
  private cookieDoor: CookieDoor;

  private testDoor: TestDoor;

  private isClickerCompleted: boolean;

  /**
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    this.player = new Player(this.game.canvas.width, this.game.canvas.height);

    this.cookieDoor = new CookieDoor(this.game.canvas.width - 50, this.game.canvas.height - 50);

    this.testDoor = new TestDoor(this.game.canvas.width, this.game.canvas.height);

    this.shouldStartClickerGame = false;

    this.shouldStartTestGame = false;

    this.isClickerCompleted = false;
  }

  /**
   *
   */
  public processInput(): void {
    if (this.player.interactsWithDoor(this.cookieDoor)) {
      this.shouldStartClickerGame = true;
    }

    if (this.player.interactsWithDoor(this.testDoor)) {
      this.shouldStartTestGame = true;
    }
    // Move the player
    this.player.movePlayer();
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
    return null;
  }

  /**
   *
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    // Draw door
    this.cookieDoor.draw(this.game.ctx);

    this.testDoor.draw(this.game.ctx);

    // Draw Player
    this.player.draw(this.game.ctx);

    this.game.writeTextToCanvas("To enter a door, move your character over it and press 'spacebar'", 30, this.game.canvas.width - 5, this.game.canvas.height - 10, 'right', 'white');
  }
}
