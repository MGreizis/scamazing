import Game from '../scripts/Game.js';
import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
import EndScreen from './EndScreen.js';

export default class SnakeGame extends Scene {
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
      return new EndScreen(this.game);
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
    this.game.writeTextToCanvas(line1, 76, centerX, 250, 'center', 'red');
    const msg = "Press 'spacebar' to go back";
    this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'red');
  }
}
