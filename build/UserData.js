export default class UserData {
    name;
    level;
    constructor() {
        this.level = 1;
        this.name = 'Player 1';
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
}
//# sourceMappingURL=UserData.js.map