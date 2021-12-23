import Game from './Game.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
// import Scene from './Scene.js';

export default class Environment {
  private shouldStart: boolean;

  private keyboard: KeyListener;

  private player: Player;

  private game: Game;

  private canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;

  /**
   * Constructor
   *
   * @param canvas canvas
   */
  public constructor(canvas: HTMLCanvasElement) {
    this.keyboard = new KeyListener();
    this.shouldStart = false;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * Lorem ipsum
   */
  public processInput(): void {
    if (this.player.interactsWithDoor) {
      this.shouldStart = true;
    }
  }

  // public goBack(): void {
  //   if (this.keybaord.isKeyDown(KeyListener.KEY_SPACE)) {
  //     const init = () => new Game(document.getElementById('canvas') as HTMLCanvasElement);
  //   }
  // }

  // /**
  //  * Advances the game simulation one step. It may run AI and physics (usually
  //  * in that order). The return value of this method determines what the `GameLoop`
  //  * that is animating this object will do next. If `null` is returned, the
  //  * GameLoop will render this scene and proceeds to the next animation frame.
  //  * If this methods returns a `Scene` (subclass) object, it will NOT render this
  //  * scene but will start considering that object as the current scene to animate.
  //  * In other words, by returning a Scene object, you can set the next scene to
  //  * animate.
  //  *
  //  * @returns a new `Scene` object if the game should start animating that scene
  //  *   on the next animation frame. If the game should just continue with the
  //  *   current scene, just return `null`
  //  */
  // public update(): Scene {
  //   if (this.shouldStart) {
  //     return new Level
  //   }
  //   return null;
  // }

  /**
   * Renders the new environment to the DOM
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    // Show temporary environment (random text for now)
    const centerX = this.game.canvas.width / 2;
    const line1 = 'This area is still being worked on :)';
    this.game.writeTextToCanvas(line1, 128, centerX, 250, 'center', 'red');
    const msg = "Press 'spacebar' to go back";
    this.game.writeTextToCanvas(msg, 48, centerX, 450, 'center', 'red');
  }
}
