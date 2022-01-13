import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Scene from './Scene.js';
import Level from './Level.js';
import Cookie from './Cookie.js';

export default class ClickerGame extends Scene {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private cookie: Cookie;

  private clickX: number;

  private clickY: number;

  private clicks: number;

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

    this.cookie = new Cookie(this.game.canvas.width, this.game.canvas.height);

    this.clicks = 0;

    this.game.canvas.addEventListener('click', (mouseEvent: MouseEvent): void => {
      this.clickX = mouseEvent.pageX;
      this.clickY = mouseEvent.pageY;

      if (
        this.clickX < (this.cookie.getXPos() + this.cookie.getImageWidth())
        && this.clickX > this.cookie.getXPos()
        && this.clickY < (this.cookie.getYPos() + this.cookie.getImageHeight())
        && this.clickY > this.cookie.getYPos()) {
        this.clicks += 1;
      }
    });
  }

  /**
   * Lorem ipsum
   */
  public processInput(): void {
    if (this.clicks === 20) {
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
    this.game.writeTextToCanvas(`Clicks: ${this.clicks}`, 50, centerX, 50, 'center', 'black');

    // Draw cookie
    this.cookie.draw(this.game.ctx);
  }
}
