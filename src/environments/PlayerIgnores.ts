import Game from '../scripts/Game.js';
import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';

export default class PlayerIgnores extends Scene {
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
    const line1 = 'Congratulations!';
    const line2 = "You didn't fall for the scam, however you could have";
    const line3 = 'handled the situation better by blocking and reporting';
    const line4 = 'the scammer';
    this.game.writeTextToCanvas(line1, 76, centerX, 80, 'center', 'white');
    this.game.writeTextToCanvas(line2, 48, centerX, 175, 'center', 'white');
    this.game.writeTextToCanvas(line3, 48, centerX, 250, 'center', 'white');
    this.game.writeTextToCanvas(line4, 48, centerX, 325, 'center', 'white');

    this.game.writeTextToCanvas("Press 'spacebar' to go back to the hub", 48, centerX, 625, 'center', 'white');
  }
}
