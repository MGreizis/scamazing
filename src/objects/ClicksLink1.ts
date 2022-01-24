import GameItem from './GameItem.js';

export default class ClicksLink1 extends GameItem {
  /**
   * @param maxX max x value
   * @param maxY max y value
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/scamwarningmsg.png');

    this.maxX = maxX;
    this.maxY = maxY;

    this.xPos = this.maxX / 4;
    this.yPos = this.maxY / 8;
  }
}
