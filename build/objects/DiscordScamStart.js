import GameItem from './GameItem.js';
export default class DiscordScamStart extends GameItem {
    constructor(maxX, maxY) {
        super('./assets/img/firstscammsg.png');
        this.maxX = maxX;
        this.maxY = maxY;
        this.xPos = maxX / 12;
        this.yPos = maxY / 8;
    }
}
//# sourceMappingURL=DiscordScamStart.js.map