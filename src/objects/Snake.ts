/* eslint-disable no-new */
/* eslint-disable max-len */
import KeyListener from '../scripts/KeyListener.js';
import Doors from './Doors.js';
import Food from './Food.js';

export default class Snake {
  private snakeParts : { x: number, y: number }[];

  private xVel: number;

  private yVel: number;

  private keyboard: KeyListener;

  /**
   *
   */
  public constructor() {
    this.snakeParts = [
      { x: 200, y: 200 },
      { x: 190, y: 200 },
      { x: 180, y: 200 },
      { x: 170, y: 200 },
      { x: 160, y: 200 },
    ];

    this.xVel = 5;
    this.yVel = 0;

    this.keyboard = new KeyListener();
  }

  /**
   * @param food
   * @param maxX
   * @param maxY
   */
  public moveSnake(food: Food, maxX: number, maxY: number): void {
    // Create the new Snake's head
    const head = { x: this.snakeParts[0].x + this.xVel, y: this.snakeParts[0].y + this.yVel };
    // Add the new head to the beginning of snake body
    this.snakeParts.unshift(head);
    const hasEatenFood = this.snakeParts[0].x === food.getXPos() && this.snakeParts[0].y === food.getYPos();
    if (hasEatenFood) {
      // Generate new food location
      new Food(maxX, maxY);
    } else {
      // Remove the last part of snake body
      this.snakeParts.pop();
    }
  }

  /**
   *
   */
  public controlSnake(): void {
    const goingUp: boolean = this.yVel === -10;
    const goingDown: boolean = this.yVel === 10;
    const goingRight: boolean = this.xVel === 10;
    const goingLeft: boolean = this.xVel === -10;

    // Moving left
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
      && !goingRight
    ) {
      this.xVel = -10;
      this.yVel = 0;
    }

    // Moving up
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_UP)
        && !goingDown
    ) {
      this.xVel = 0;
      this.yVel = -10;
    }
    // Moving right
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
              && !goingLeft
    ) {
      this.xVel = 10;
      this.yVel = 0;
    }

    // Moving down
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
          && !goingUp
    ) {
      this.xVel = 0;
      this.yVel = 10;
    }
  }

  /**
   * @param maxX
   * @param maxY
   */
  public collison(maxX: number, maxY: number) {
    const hitLeftWall = this.snakeParts[0].x < 0;
    const hitRightWall = this.snakeParts[0].x > maxX - 10;
    const hitToptWall = this.snakeParts[0].y < 0 + 10;
    const hitBottomWall = this.snakeParts[0].y > maxY - 10;
    if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall) {
      this.xVel = 0;
      this.yVel = 0;
    }
  }

  /**
   * @param door Door player can interact with
   * @returns false
   */
  public interactsWithDoor(door: Doors): boolean {
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_SPACE)
        && this.snakeParts[0].x < door.getXPos() + door.getImageWidth()
        && this.snakeParts[0].x + 10 > door.getXPos()
        && this.snakeParts[0].y < door.getYPos() + door.getImageHeight()
        && this.snakeParts[0].y + 10 > door.getYPos()
    ) {
      return true;
    }
    return false;
  }

  // Draw one snake part
  /**
   * @param snakePart
   * @param index
   * @param ctx
   */
  public drawSnakePart(index: number, ctx: CanvasRenderingContext2D): void {
    // Set the colour of the snake part
    ctx.fillStyle = 'green';
    // Set the border colour of the snake part
    ctx.strokeStyle = 'red';
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    ctx.fillRect(this.snakeParts[index].x, this.snakeParts[index].y, 10, 10);
    // Draw a border around the snake part
    ctx.strokeRect(this.snakeParts[index].x, this.snakeParts[index].y, 10, 10);
  }

  // Draw the snake on the canvas
  /**
   * @param ctx
   */
  public drawSnake(ctx: CanvasRenderingContext2D): void {
  // Draw each part
    this.snakeParts.forEach((element, index) => {
      this.drawSnakePart(index, ctx);
    });
  }
}
