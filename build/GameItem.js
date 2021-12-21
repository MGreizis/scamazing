import Utils from './Utils.js';
export default class GameItem {
    img;
    xPos;
    yPos;
    constructor(imageSrc, maxX, maxY) {
        this.img = Utils.loadNewImage(imageSrc);
        this.xPos = Utils.randomNumber(0, maxX - this.img.width);
        this.yPos = Utils.randomNumber(0, maxY - this.img.height);
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