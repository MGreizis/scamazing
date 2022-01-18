import Game from '../scripts/Game.js';
import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import PopUp from '../objects/ClickerPopUp.js';
import ClickerGame from './ClickerGame.js';
import InteractedWithPopUp from './InteractedWithPopUp.js';
import Level from './Level.js';

export default class ScenePopUp extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private popUp: PopUp;

  private clickerGame: ClickerGame;

  private shouldStartInteractedWithPop: boolean;

  private shouldStartHub: boolean;

  /**
   * Constructor
   *
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    this.keyboard = new KeyListener();
    this.shouldStart = false;
    this.shouldStartInteractedWithPop = false;
    this.shouldStartHub = false;

    this.popUp = new PopUp(this.game.canvas.width, this.game.canvas.height);
  }

  /**
   * Lorem ipsum
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_N)) {
      this.shouldStartInteractedWithPop = true;
    } else if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
      this.shouldStartHub = true;
    }
  }

  /**
   * Idk
   *
   * @returns null
   */
  public update(): Scene {
    if (this.shouldStartInteractedWithPop) {
      return new InteractedWithPopUp(this.game);
    }
    if (this.shouldStartHub) {
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
    const centerX = this.game.canvas.width / 2;
    this.game.writeTextToCanvas("Press the 'C' button to ignore the pop-up", 50, centerX, 50, 'center', 'white');
    this.game.writeTextToCanvas("Press the 'N' button to download the app", 50, centerX, 150, 'center', 'white');
  }
}
