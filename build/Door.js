import GameItem from './GameItem.js';
import Utils from './Utils.js';
export default class Door extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/door.png');
        this.xPos = Utils.randomNumber(0, maxX - this.img.width);
        this.yPos = Utils.randomNumber(0, maxY - this.img.height);
        this.maxX = maxX;
        this.maxY = maxY;
    }
}
//# sourceMappingURL=Door.js.map