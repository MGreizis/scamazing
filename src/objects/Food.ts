import Utils from '../scripts/Utils.js';

export default class Food {
  private xPos: number;

  private yPos: number;

  /**
   * @param maxX
   * @param maxY
   */
  public constructor(maxX: number, maxY: number) {
    this.xPos = Utils.randomNumber(0, maxX - 10);
    this.yPos = Utils.randomNumber(0, maxY - 10);
  }

  // Draw the snake on the canvas
  /**
   * @param ctx
   */
  public drawFood(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'darkgreen';
    ctx.fillRect(this.xPos, this.yPos, 10, 10);
    ctx.strokeRect(this.xPos, this.yPos, 10, 10);
  }

  /**
   *
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   *
   */
  public getYPos(): number {
    return this.yPos;
  }
}
