import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import DiscordScamStart from '../objects/DiscordScamStart.js';
import PlayerBlockedMsg from './PlayerBlockedMsg.js';
import PlayerIgnores from './PlayerIgnores.js';
import PlayerClicksLink from './PlayerClicksLink.js';
export default class MessagingGame extends Scene {
    shouldStart;
    keyboard;
    clicksLink;
    ignores;
    blockAndReport;
    discordMsg;
    constructor(game) {
        super(game);
        this.keyboard = new KeyListener();
        this.shouldStart = false;
        this.discordMsg = new DiscordScamStart(this.game.canvas.width, this.game.canvas.height);
        this.clicksLink = false;
        this.ignores = false;
        this.blockAndReport = false;
    }
    processInput() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_N)) {
            this.clicksLink = true;
        }
        else if (this.keyboard.isKeyDown(KeyListener.KEY_C)) {
            this.ignores = true;
        }
        else if (this.keyboard.isKeyDown(KeyListener.KEY_B)) {
            this.blockAndReport = true;
        }
    }
    update() {
        if (this.clicksLink) {
            return new PlayerClicksLink(this.game);
        }
        if (this.ignores) {
            this.game.getUser().addScore(20);
            return new PlayerIgnores(this.game);
        }
        if (this.blockAndReport) {
            return new PlayerBlockedMsg(this.game);
        }
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.discordMsg.draw(this.game.ctx);
        const centerX = this.game.canvas.width / 2;
        this.game.writeTextToCanvas("Press the 'C' button to ignore the message, Press the 'N' button to click the link, Press the 'B' button to block and report this user", 24, centerX, 50, 'center', 'white');
    }
}
//# sourceMappingURL=MessagingGame.js.map