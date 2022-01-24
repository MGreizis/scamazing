import Game from '../scripts/Game.js';
import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import ClicksLink1 from '../objects/ClicksLink1.js';
import MessagingGame from './MessagingGame.js';
import PlayerClicksLink2 from './PlayerClicksLink2.js';

export default class PlayerClicksLink extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private continuesClicking: boolean;

  private goesBack: boolean;

  private clicksLink1: ClicksLink1;

  /**
   * Constructor
   *
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    this.keyboard = new KeyListener();
    this.shouldStart = false;

    this.clicksLink1 = new ClicksLink1(this.game.canvas.width, this.game.canvas.height);

    this.continuesClicking = false;
    this.goesBack = false;
  }

  /**
   * Lorem ipsum
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_Y)) {
      this.continuesClicking = true;
    } else if (this.keyboard.isKeyDown(KeyListener.KEY_N)) {
      this.goesBack = true;
    }
  }

  /**
   * Idk
   *
   * @returns null
   */
  public update(): Scene {
    if (this.continuesClicking) {
      return new PlayerClicksLink2(this.game);
    }
    if (this.goesBack) {
      return new MessagingGame(this.game);
    }
    return null;
  }

  /**
   * Renders the new environment to the DOM
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    this.clicksLink1.draw(this.game.ctx);

    // Show temporary environment (random text for now)
    const centerX = this.game.canvas.width / 2;
    const line1 = "Do you want to continue? Press 'Y' for Yes, Press 'N' for No";
    this.game.writeTextToCanvas(line1, 24, centerX, 50, 'center', 'white');
  }
}
