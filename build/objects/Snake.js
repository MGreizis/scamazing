import KeyListener from '../scripts/KeyListener.js';
import Food from './Food.js';
export default class Snake {
    snakeParts;
    xVel;
    yVel;
    keyboard;
    constructor() {
        this.snakeParts = [
            { x: 200, y: 200 },
            { x: 190, y: 200 },
            { x: 180, y: 200 },
            { x: 170, y: 200 },
            { x: 160, y: 200 },
        ];
        this.xVel = 5;
        this.yVel = 0;
        this.keyboard = new KeyListener();
    }
    moveSnake(food, maxX, maxY) {
        const head = { x: this.snakeParts[0].x + this.xVel, y: this.snakeParts[0].y + this.yVel };
        this.snakeParts.unshift(head);
        const hasEatenFood = this.snakeParts[0].x === food.getXPos() && this.snakeParts[0].y === food.getYPos();
        if (hasEatenFood) {
            new Food(maxX, maxY);
        }
        else {
            this.snakeParts.pop();
        }
    }
    controlSnake() {
        const goingUp = this.yVel === -10;
        const goingDown = this.yVel === 10;
        const goingRight = this.xVel === 10;
        const goingLeft = this.xVel === -10;
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
            && !goingRight) {
            this.xVel = -10;
            this.yVel = 0;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_UP)
            && !goingDown) {
            this.xVel = 0;
            this.yVel = -10;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
            && !goingLeft) {
            this.xVel = 10;
            this.yVel = 0;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
            && !goingUp) {
            this.xVel = 0;
            this.yVel = 10;
        }
    }
    collison(maxX, maxY) {
        const hitLeftWall = this.snakeParts[0].x < 0;
        const hitRightWall = this.snakeParts[0].x > maxX - 10;
        const hitToptWall = this.snakeParts[0].y < 0 + 10;
        const hitBottomWall = this.snakeParts[0].y > maxY - 10;
        if (hitLeftWall || hitRightWall || hitToptWall || hitBottomWall) {
            this.xVel = 0;
            this.yVel = 0;
        }
    }
    interactsWithDoor(door) {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)
            && this.snakeParts[0].x < door.getXPos() + door.getImageWidth()
            && this.snakeParts[0].x + 10 > door.getXPos()
            && this.snakeParts[0].y < door.getYPos() + door.getImageHeight()
            && this.snakeParts[0].y + 10 > door.getYPos()) {
            return true;
        }
        return false;
    }
    drawSnakePart(index, ctx) {
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'red';
        ctx.fillRect(this.snakeParts[index].x, this.snakeParts[index].y, 10, 10);
        ctx.strokeRect(this.snakeParts[index].x, this.snakeParts[index].y, 10, 10);
    }
    drawSnake(ctx) {
        this.snakeParts.forEach((element, index) => {
            this.drawSnakePart(index, ctx);
        });
    }
}
//# sourceMappingURL=Snake.js.map