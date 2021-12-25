import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVel;
    yVel;
    keyboard;
    constructor(maxX, maxY) {
        super('./assets/img/character_robot_walk0.png');
        this.xPos = 0;
        this.yPos = 0;
        this.xVel = 3;
        this.yVel = 3;
        this.maxX = maxX;
        this.maxY = maxY;
        this.keyboard = new KeyListener();
    }
    movePlayer() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
            && this.xPos + this.img.width < this.maxX) {
            this.xPos += this.xVel;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
            && this.xPos > 0) {
            this.xPos -= this.xVel;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_UP)
            && this.yPos > 0) {
            this.yPos -= this.yVel;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
            && this.yPos + this.img.height < this.maxY) {
            this.yPos += this.yVel;
        }
    }
    interactsWithDoor(door) {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)
            && this.xPos < door.getXPos() + door.getImageWidth()
            && this.xPos + this.img.width > door.getXPos()
            && this.yPos < door.getYPos() + door.getImageHeight()
            && this.yPos + this.img.height > door.getYPos()) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=Player.js.map