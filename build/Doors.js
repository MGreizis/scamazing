import GameItem from './GameItem.js';
import Utils from './Utils.js';
export default class Doors extends GameItem {
    constructor(maxX, maxY, img) {
        super(img);
        this.xPos = Utils.randomNumber(0 + this.img.width, maxX - (this.img.width));
        this.yPos = Utils.randomNumber(0 + this.img.height, maxY - (this.img.height));
        this.maxX = maxX;
        this.maxY = maxY;
    }
}
//# sourceMappingURL=Doors.js.map