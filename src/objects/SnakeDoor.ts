import Doors from './Doors.js';

export default class SnakeDoor extends Doors {
  /**
   * @param maxX maximum x value
   * @param maxY maximum y value
   */
  public constructor(maxX:number, maxY:number) {
    super(maxX, maxY, './assets/img/snake-door.png');

    this.xPos = 50;
    this.yPos = 50;
  }
}
