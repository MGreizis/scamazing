import Door from './Door.js';
import Game from './Game.js';
import Player from './Player.js';
import Scene from './Scene.js';

export default class Level extends Scene {
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
  }

  /**
   *
   */
  public processInput(): void {
    // Move the player
    this.player.movePlayer();
  }

  /**
   * @param elapsed null
   * @returns null
   */
  public update(elapsed: number): Scene {
    // interaction with door
    this.player.interactsWithDoor(this.door);
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
