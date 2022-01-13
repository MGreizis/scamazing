import Doors from './Doors.js';

export default class TestDoor extends Doors {
  /**
   * @param maxX maximum x value
   * @param maxY maximum y value
   */
  public constructor(maxX:number, maxY:number) {
    super(maxX, maxY, './assets/img/test-door.png');
  }
}
