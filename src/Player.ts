import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';

export default class Player extends GameItem {
  private xVel: number;

  private yVel: number;

  private maxX: number;

  private maxY: number;

  private keyboard: KeyListener;

  /**
   * @param maxX
   * @param maxY
   */
  public constructor(maxX:number, maxY:number) {
    super('./assets/img/character_robot_walk0.png', maxX, maxY);
    this.xVel = 3;
    this.yVel = 3;
    this.maxX = maxX;
    this.maxY = maxY;

    this.keyboard = new KeyListener();
  }

  /**
   * Moves the player depending on which arrow key is pressed. Player is bound
   * to the canvas and cannot move outside of it
   *
   * @param canvas
   */
  public movePlayer() {
    // Moving right
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
        && this.xPos + this.img.width < this.maxX
    ) {
      this.xPos += this.xVel;
    }

    // Moving left
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
        && this.xPos > 0
    ) {
      this.xPos -= this.xVel;
    }

    // Moving up
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_UP)
        && this.yPos > 0
    ) {
      this.yPos -= this.yVel;
    }

    // Moving down
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
        && this.yPos + this.img.height < this.maxY
    ) {
      this.yPos += this.yVel;
    }
  }
}
