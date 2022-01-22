import Utils from '../scripts/Utils.js';
export default class Food {
    xPos;
    yPos;
    constructor(maxX, maxY) {
        this.xPos = Utils.randomNumber(0, maxX - 10);
        this.yPos = Utils.randomNumber(0, maxY - 10);
    }
    drawFood(ctx) {
        ctx.fillStyle = 'lightgreen';
        ctx.strokeStyle = 'darkgreen';
        ctx.fillRect(this.xPos, this.yPos, 10, 10);
        ctx.strokeRect(this.xPos, this.yPos, 10, 10);
    }
    getXPos() {
        return this.xPos;
    }
    getYPos() {
        return this.yPos;
    }
}
//# sourceMappingURL=Food.js.map