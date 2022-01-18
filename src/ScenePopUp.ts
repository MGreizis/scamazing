import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
import PopUp from './ClickerPopUp.js';
import ClickerGame from './ClickerGame.js';

export default class ScenePopUp extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private popUp: PopUp;

  private clickerGame: ClickerGame;

  /**
   * Constructor
   *
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    this.keyboard = new KeyListener();
    this.shouldStart = false;

    this.popUp = new PopUp(this.game.canvas.width, this.game.canvas.height);
  }

  /**
   * Lorem ipsum
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
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

    this.popUp.draw(this.game.ctx);
    // const centerX = this.game.canvas.width / 2;
    // this.game.writeTextToCanvas(`Clicks: ${this.clicks}`, 50, centerX, 50, 'center', 'white');
  }
}
