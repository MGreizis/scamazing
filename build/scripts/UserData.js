export default class UserData {
    name;
    level;
    score;
    constructor() {
        this.level = 1;
        this.name = 'Player 1';
        this.score = 0;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLevel() {
        return this.level;
    }
    increaseLevel() {
        this.level += 1;
    }
    getScore() {
        return this.score;
    }
    addScore(points) {
        this.score += points;
    }
    removeScore(points) {
        this.score -= points;
    }
}
//# sourceMappingURL=UserData.js.map