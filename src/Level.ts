import Door from './Door.js';
import Game from './Game.js';
import Player from './Player.js';
import Scene from './Scene.js';
import ClickerGame from './ClickerGame.js';
import Environment from './TestEnvironment.js';

export default class Level extends Scene {
  private shouldStart: boolean;

  // Player
  private player: Player;

  // Door
  private door: Door;

  /**
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    this.player = new Player(this.game.canvas.width, this.game.canvas.height);

    this.door = new Door(this.game.canvas.width, this.game.canvas.height);

    this.shouldStart = false;
  }

  /**
   *
   */
  public processInput(): void {
    if (this.player.interactsWithDoor(this.door)) {
      this.shouldStart = true;
    }
    // Move the player
    this.player.movePlayer();
  }

  /**
   * @returns null
   */
  public update(): Scene {
    // interaction with door
    if (this.shouldStart) {
      return new ClickerGame(this.game);
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
    this.door.draw(this.game.ctx);

    // Draw Player
    this.player.draw(this.game.ctx);
  }
}
