import Utils from '../scripts/Utils.js';
import GameItem from './GameItem.js';
export default class Coin extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/coin.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = Utils.randomNumber(0, maxX - 50);
        this.yPos = Utils.randomNumber(0, maxY - 50);
    }
    getImageWidth() {
        return this.img.width;
    }
    getImageHeight() {
        return this.img.height;
    }
}
//# sourceMappingURL=Coin.js.map