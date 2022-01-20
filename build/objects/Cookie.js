import GameItem from './GameItem.js';
export default class Cookie extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/cookie.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = this.maxX / 3;
        this.yPos = this.maxY / 6;
    }
}
//# sourceMappingURL=Cookie.js.map