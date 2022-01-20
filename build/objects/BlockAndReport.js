import GameItem from './GameItem.js';
export default class BlockAndReport extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/reportedscammsg.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = this.maxX / 3.25;
        this.yPos = this.maxY / 6;
    }
}
//# sourceMappingURL=BlockAndReport.js.map