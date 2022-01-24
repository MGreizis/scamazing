import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import EndScreen from './EndScreen.js';
import Coin from '../objects/Coin.js';
import Utils from '../scripts/Utils.js';
export default class SnakeGame extends Scene {
    shouldStart;
    snakeParts;
    xVel;
    yVel;
    keyboard;
    coins;
    countdownToCoinSpawn;
    constructor(game) {
        super(game);
        this.snakeParts = [
            { x: 200, y: 200 },
            { x: 190, y: 200 },
            { x: 180, y: 200 },
            { x: 170, y: 200 },
            { x: 160, y: 200 },
        ];
        this.xVel = 10;
        this.yVel = 0;
        this.countdownToCoinSpawn = 5000;
        for (let i = 0; i < Utils.randomNumber(1, 5); i++) {
            this.coins.push(new Coin(this.game.canvas.width, this.game.canvas.height));
        }
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        setTimeout(() => {
            this.movement();
            this.drawSnake();
            this.controlSnake();
        }, 100);
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            this.shouldStart = true;
        }
        this.movement();
        this.controlSnake();
    }
    movement() {
        const head = { x: this.snakeParts[0].x + this.xVel, y: this.snakeParts[0].y + this.yVel };
        this.snakeParts.unshift(head);
        this.snakeParts.pop();
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
    collison() {
        const hitLeftWall = this.snakeParts[0].x < 0;
        const hitRightWall = this.snakeParts[0].x > this.game.canvas.width - 5;
        const hitTopWall = this.snakeParts[0].y < 0 + 5;
        const hitBottomWall = this.snakeParts[0].y > this.game.canvas.height - 5;
        if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall) {
            this.xVel = 0;
            this.yVel = 0;
        }
    }
    drawSnakePart(index) {
        this.game.ctx.fillStyle = 'green';
        this.game.ctx.strokeStyle = 'red';
        this.game.ctx.fillRect(this.snakeParts[index].x, this.snakeParts[index].y, 10, 10);
        this.game.ctx.strokeRect(this.snakeParts[index].x, this.snakeParts[index].y, 10, 10);
    }
    drawSnake() {
        this.snakeParts.forEach((element, index) => {
            this.drawSnakePart(index);
        });
    }
    update(elapsed) {
        this.handleCoinCollisions();
        if (this.countdownToCoinSpawn <= 0) {
            this.coins.push(new Coin(this.game.canvas.width, this.game.canvas.height));
            this.countdownToCoinSpawn = Utils.randomNumber(500, 2000);
        }
        else {
            this.countdownToCoinSpawn -= elapsed;
        }
        if (this.shouldStart) {
            return new EndScreen(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.drawSnake();
        this.coins.forEach((coin) => {
            coin.draw(this.game.ctx);
        });
    }
    isCollidingWith(coin) {
        if (this.snakeParts[0].x < coin.getXPos() + coin.getImageWidth()
            && this.snakeParts[0].x + 10 > coin.getXPos()
            && this.snakeParts[0].y < coin.getYPos() + coin.getImageHeight()
            && this.snakeParts[0].y + 10 > coin.getYPos()) {
            return true;
        }
        return false;
    }
    handleCoinCollisions() {
        this.coins = this.coins.filter((coin) => {
            if (this.isCollidingWith(coin)) {
                return false;
            }
            return true;
        });
    }
}
//# sourceMappingURL=SnakeGame.js.map