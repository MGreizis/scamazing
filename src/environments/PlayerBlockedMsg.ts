import Game from '../scripts/Game.js';
import KeyListener from '../scripts/KeyListener.js';
import Scene from './Scene.js';
import BlockAndReport from '../objects/BlockAndReport.js';
import PlayerReportedUser from './PlayerReportedUser.js';
import MessagingGame from './MessagingGame.js';

export default class PlayerBlockedMsg extends Scene {
  private playerReportedUser: boolean;

  private keyboard: KeyListener;

  private reported: BlockAndReport;

  private goBack: boolean;

  /**
   * Constructor
   *
   * @param game game
   */
  public constructor(game: Game) {
    super(game);
    this.keyboard = new KeyListener();
    this.playerReportedUser = false;
    this.goBack = false;

    this.reported = new BlockAndReport(this.game.canvas.width, this.game.canvas.height);
  }

  /**
   * Lorem ipsum
   */
  public processInput(): void {
    if (this.keyboard.isKeyDown(KeyListener.KEY_Y)) {
      this.playerReportedUser = true;
    } else if (this.keyboard.isKeyDown(KeyListener.KEY_N)) {
      this.goBack = true;
    }
  }

  /**
   * Idk
   *
   * @returns null
   */
  public update(): Scene {
    if (this.playerReportedUser) {
      this.game.getUser().addScore(50);
      return new PlayerReportedUser(this.game);
    }
    if (this.goBack) {
      return new MessagingGame(this.game);
    }
    return null;
  }

  /**
   * Renders the new environment to the DOM
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    this.reported.draw(this.game.ctx);

    // Show temporary environment (random text for now)
    const centerX = this.game.canvas.width / 2;
    this.game.writeTextToCanvas("Press the 'Y' button to report the user or Press the 'N' button to go back", 24, centerX, 50, 'center', 'white');
  }
}
