import Game from '../scripts/Game.js';
import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';

export default class PlayerGotScammed extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  /**
   * Constructor
   *
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
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
    const line1 = 'You fell for the scam! If an unknown person ever';
    const line2 = 'messages you offering free things,';
    const line3 = 'block and report them. They cannot be trusted!';
    this.game.writeTextToCanvas(line1, 48, centerX, 50, 'center', 'white');
    this.game.writeTextToCanvas(line2, 48, centerX, 150, 'center', 'white');
    this.game.writeTextToCanvas(line3, 48, centerX, 250, 'center', 'white');

    const msg = "Press 'spacebar' to go back to the hub";
    this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'white');
  }
}
