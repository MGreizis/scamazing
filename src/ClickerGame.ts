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
        console.log(this.clicks);
      }
    });
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
<<<<<<< HEAD:src/ClickerGame.ts
    this.game.writeTextToCanvas(`Clicks: ${this.clicks}`, 50, centerX, 50, 'center', 'black');

    // Draw cookie
    this.cookie.draw(this.game.ctx);
=======
    const line1 = 'This area is still being worked on :)';
    this.game.writeTextToCanvas(line1, 80, centerX, 250, 'center', 'red');
    const msg = "Press 'spacebar' to go back";
    this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'red');
>>>>>>> 898d0febc4ca80fece94cc160c3123c3859fdd22:src/TestEnvironment.ts
  }
}
