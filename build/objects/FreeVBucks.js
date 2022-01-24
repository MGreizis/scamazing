import GameItem from './GameItem.js';
export default class FreeVBucks extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/freevbucks.jpg');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = this.maxX / 4;
        this.yPos = this.maxY / 6;
    }
}
//# sourceMappingURL=FreeVBucks.js.map