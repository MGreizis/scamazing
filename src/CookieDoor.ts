import Doors from './Doors.js';

export default class CookieDoor extends Doors {
  /**
   * @param maxX maximum x value
   * @param maxY maximum y value
   */
  public constructor(maxX:number, maxY:number) {
    super(maxX, maxY, './assets/img/cookie-door.png');
  }
}
