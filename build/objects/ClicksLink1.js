import GameItem from './GameItem.js';
export default class ClicksLink1 extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/scamwarningmsg.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = this.maxX / 4;
        this.yPos = this.maxY / 8;
    }
}
//# sourceMappingURL=ClicksLink1.js.map