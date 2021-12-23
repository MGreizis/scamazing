import Door from './Door.js';
import Player from './Player.js';
import Scene from './Scene.js';
export default class Level extends Scene {
    player;
    door;
    constructor(game) {
        super(game);
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.door = new Door(this.game.canvas.width, this.game.canvas.height);
    }
    processInput() {
        this.player.movePlayer();
    }
    update(elapsed) {
        this.player.interactsWithDoor(this.door);
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.door.draw(this.game.ctx);
        this.player.draw(this.game.ctx);
    }
}
//# sourceMappingURL=Level.js.map