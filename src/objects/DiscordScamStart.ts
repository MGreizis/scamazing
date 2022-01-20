import GameItem from './GameItem.js';

export default class DiscordScamStart extends GameItem {
  /**
   * @param maxX max x value
   * @param maxY max y value
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/firstscammsg.png');

    this.maxX = maxX;
    this.maxY = maxY;

    this.xPos = maxX / 12;
    this.yPos = maxY / 8;
  }
}
