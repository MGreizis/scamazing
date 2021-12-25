import Door from './Door.js';
import Player from './Player.js';
import Scene from './Scene.js';
import Environment from './TestEnvironment.js';
export default class Level extends Scene {
    shouldStart;
    player;
    door;
    constructor(game) {
        super(game);
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.door = new Door(this.game.canvas.width, this.game.canvas.height);
        this.shouldStart = false;
    }
    processInput() {
        if (this.player.interactsWithDoor(this.door)) {
            this.shouldStart = true;
        }
        this.player.movePlayer();
    }
    update() {
        if (this.shouldStart) {
            return new Environment(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.door.draw(this.game.ctx);
        this.player.draw(this.game.ctx);
    }
}
//# sourceMappingURL=Level.js.map