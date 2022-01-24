import Utils from '../scripts/Utils.js';
import Doors from './Doors.js';
export default class VictoryDoor extends Doors {
    constructor(maxX, maxY) {
        super(maxX, maxY, './assets/img/victoryDoor.png');
        this.xPos = Utils.randomNumber(0 + (this.img.width), maxX - (this.img.width));
        this.yPos = Utils.randomNumber(0 + (this.img.height), maxY - (this.img.height));
    }
}
//# sourceMappingURL=VictoryDoor.js.map