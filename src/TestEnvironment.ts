import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Player from './Player.js';
import Level from './Level.js';

export default class Environment extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private player: Player;

  /**
   * Constructor
   *
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    // game.reset();
    this.keyboard = new KeyListener();
    this.shouldStart = false;
  }

  /**
   * Lorem ipsum
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
      this.shouldStart = true;
    }
  }

  /**
   * Idk
   *
   * @returns null
   */
  public update(): Scene {
    if (this.shouldStart) {
      return new Level(this.game);
    }
    return null;
  }

  /**
   * Renders the new environment to the DOM
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    // Show temporary environment (random text for now)
    const centerX = this.game.canvas.width / 2;
    const line1 = 'This area is still being worked on :)';
    this.game.writeTextToCanvas(line1, 80, centerX, 250, 'center', 'red');
    const msg = "Press 'spacebar' to go back";
    this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'red');
  }
}
