import GameItem from './GameItem.js';
import Utils from './Utils.js';

export default abstract class Doors extends GameItem {
  /**
   * @param maxX maximum x value
   * @param maxY maximum y value
   * @param img
   */
  public constructor(maxX:number, maxY:number, img: string) {
    super(img);
    this.xPos = Utils.randomNumber(0, maxX - (this.img.width * 2));
    this.yPos = Utils.randomNumber(0, maxY - (this.img.height * 2));

    this.maxX = maxX;
    this.maxY = maxY;
  }
}
