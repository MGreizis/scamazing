import Utils from './Utils.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  /**
   * @param imageSrc
   * @param maxX
   * @param maxY
   */
  public constructor(imageSrc: string, maxX:number, maxY:number) {
    this.img = Utils.loadNewImage(imageSrc);
    this.xPos = Utils.randomNumber(0, maxX - this.img.width);
    this.yPos = Utils.randomNumber(0, maxY - this.img.height);
  }

  /**
   *
   */
  public getImageHeight(): number {
    return this.img.height;
  }

  /**
   *
   */
  public getImageWidth(): number {
    return this.img.width;
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
  public getYPos():number {
    return this.yPos;
  }

  /**
   * @param ctx
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }
}
