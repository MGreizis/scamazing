export default class UserData {
  private name: string;

  private level: number;

  private score: number;

  /**
   * Creates a new instance of this class
   */
  public constructor() {
    this.level = 1;
    this.name = 'Player 1';
    this.score = 0;
  }

  /**
   * getName
   *
   * @returns the name
   */
  public getName(): string {
    return this.name;
  }

  /**
   * setName
   *
   * @param name the name to set
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * getLevel
   *
   * @returns the current level
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * increaseLevel
   */
  public increaseLevel(): void {
    this.level += 1;
  }

  /**
   * Score getter
   *
   * @returns score
   */
  public getScore(): number {
    return this.score;
  }

  /**
   * Adds points to score
   */
  public addScore(): void {
    this.score += 50;
  }

  /**
   * Removes points from the score
   */
  public removeScore(): void {
    this.score -= 30;
  }
}
