import Utils from '../scripts/Utils.js';
export default class GameItem {
    img;
    xPos;
    yPos;
    maxX;
    maxY;
    constructor(imageSrc) {
        this.img = Utils.loadNewImage(imageSrc);
    }
    getImageHeight() {
        return this.img.height;
    }
    getImageWidth() {
        return this.img.width;
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.xPos, this.yPos);
    }
}
//# sourceMappingURL=GameItem.js.map