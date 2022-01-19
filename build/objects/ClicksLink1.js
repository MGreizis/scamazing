import GameItem from './GameItem.js';
export default class ClicksLink1 extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/scamwarningmsg.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = this.maxX / 2 - (this.img.width / 2);
        this.yPos = this.maxY / 2 - (this.img.height / 2);
    }
}
//# sourceMappingURL=ClicksLink1.js.map