import Doors from './Doors.js';
export default class SnakeDoor extends Doors {
    constructor(maxX, maxY) {
        super(maxX, maxY, './assets/img/snake-door.png');
        this.xPos = 50;
        this.yPos = 50;
    }
}
//# sourceMappingURL=SnakeDoor.js.map