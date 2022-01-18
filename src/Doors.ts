import GameItem from './GameItem.js';
import Utils from './Utils.js';

export default abstract class Doors extends GameItem {
  /**
   * @param maxX maximum x value
   * @param maxY maximum y value
   * @param img image
   */
  public constructor(maxX:number, maxY:number, img: string) {
    super(img);
    this.xPos = Utils.randomNumber(0 + this.img.width, maxX - (this.img.width));
    this.yPos = Utils.randomNumber(0 + this.img.height, maxY - (this.img.height));

    this.maxX = maxX;
    this.maxY = maxY;
  }
}
