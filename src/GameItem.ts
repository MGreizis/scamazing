import Utils from './Utils.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  protected maxX: number;

  protected maxY: number;

  /**
   * @param imageSrc image source
   */
  public constructor(imageSrc: string) {
    this.img = Utils.loadNewImage(imageSrc);
  }

  /**
   * Image height getter
   *
   * @returns image height
   */
  public getImageHeight(): number {
    return this.img.height;
  }

  /**
   * Image width getter
   *
   * @returns image width
   */
  public getImageWidth(): number {
    return this.img.width;
  }

  /**
   * X position getter
   *
   * @returns x position
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * Y position getter
   *
   * @returns y position
   */
  public getYPos():number {
    return this.yPos;
  }

  /**
   * @param ctx ctx
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }
}
