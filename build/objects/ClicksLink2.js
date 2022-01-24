import GameItem from './GameItem.js';
export default class ClicksLink2 extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/scamsite.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = this.maxX / 4;
        this.yPos = this.maxY / 200;
    }
}
//# sourceMappingURL=ClicksLink2.js.map