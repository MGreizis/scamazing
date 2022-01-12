import GameItem from './GameItem.js';
export default class Cookie extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/cookie.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = 512;
        this.yPos = 100;
    }
}
//# sourceMappingURL=Cookie.js.map