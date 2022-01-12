import GameItem from './GameItem.js';

export default class Cookie extends GameItem {
  /**
   * @param maxX maximum x value
   * @param maxY maximum y value
   */
  public constructor(maxX:number, maxY:number) {
    super('./assets/img/cookie.png');
    this.maxX = maxX;
    this.maxY = maxY;

    this.xPos = 512;
    this.yPos = 100;
  }
}
