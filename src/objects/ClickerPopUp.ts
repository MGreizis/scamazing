import GameItem from './GameItem.js';

export default class PopUp extends GameItem {
  /**
   * @param maxX max x value
   * @param maxY max y value
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/popup1.png');

    this.maxX = maxX;
    this.maxY = maxY;

    this.xPos = this.maxX / 2 - (this.img.width / 2);
    this.yPos = this.maxY / 2 - (this.img.height / 2);
  }
}
