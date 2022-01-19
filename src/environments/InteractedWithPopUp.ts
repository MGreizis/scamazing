import Game from '../scripts/Game.js';
import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';

export default class InteractedWithPopUp extends Scene {
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

    const centerX = this.game.canvas.width / 2;
    this.game.writeTextToCanvas("Don't interact with these kinds of pop-ups, as they most likely", 42, centerX, 100, 'center', 'white');
    this.game.writeTextToCanvas('are scammers attempting to install malware on your computer!', 42, centerX, 175, 'center', 'white');
    this.game.writeTextToCanvas("Press the 'spacebar' to go back to the hub", 48, centerX, 625, 'center', 'white');
  }
}
