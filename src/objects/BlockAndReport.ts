import GameItem from './GameItem.js';

export default class BlockAndReport extends GameItem {
  /**
   * @param maxX max x value
   * @param maxY max y value
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/reportedscammsg.png');

    this.maxX = maxX;
    this.maxY = maxY;

    this.xPos = this.maxX / 3.25;
    this.yPos = this.maxY / 6;
  }
}
