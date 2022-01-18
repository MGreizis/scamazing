import GameItem from './GameItem.js';
export default class PopUp extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/popup1.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = this.maxX / 2 - (this.img.width / 2);
        this.yPos = this.maxY / 2 - (this.img.height / 2);
    }
}
//# sourceMappingURL=ClickerPopUp.js.map