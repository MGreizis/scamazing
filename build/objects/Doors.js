import GameItem from './GameItem.js';
import Utils from '../scripts/Utils.js';
export default class Doors extends GameItem {
    constructor(maxX, maxY, img) {
        super(img);
        this.xPos = Utils.randomNumber(0, maxX - (this.img.width));
        this.yPos = Utils.randomNumber(0, maxY - (this.img.height));
        this.maxX = maxX;
        this.maxY = maxY;
    }
}
//# sourceMappingURL=Doors.js.map