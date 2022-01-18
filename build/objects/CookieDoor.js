import Utils from '../scripts/Utils.js';
import Doors from './Doors.js';
export default class CookieDoor extends Doors {
    constructor(maxX, maxY) {
        super(maxX, maxY, './assets/img/cookie-door.png');
        this.xPos = Utils.randomNumber(0 + (this.img.width * 2), maxX - (this.img.width));
        this.yPos = Utils.randomNumber(0 + (this.img.height * 2), maxY - (this.img.height));
    }
}
//# sourceMappingURL=CookieDoor.js.map