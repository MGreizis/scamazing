import Utils from './Utils.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  /**
   * @param imageSrc image source
   * @param maxX maximum X value
   * @param maxY maximum Y value
   */
  public constructor(imageSrc: string, maxX:number, maxY:number) {
    this.img = Utils.loadNewImage(imageSrc);
    this.xPos = Utils.randomNumber(0, maxX - this.img.width);
    this.yPos = Utils.randomNumber(0, maxY - this.img.height);
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
