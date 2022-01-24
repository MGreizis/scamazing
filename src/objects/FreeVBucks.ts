import GameItem from './GameItem.js';

export default class FreeVBucks extends GameItem {
  /**
   * @param maxX max x value
   * @param maxY max y value
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/freevbucks.jpg');

    this.maxX = maxX;
    this.maxY = maxY;

    this.xPos = this.maxX / 4;
    this.yPos = this.maxY / 6;
  }
}
