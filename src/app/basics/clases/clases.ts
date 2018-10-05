export class Player {
    lifePoints: number;

    constructor() {
        this.lifePoints = 100;
    }

    removeLifePoints(attack: number) {
        if (attack >= this.lifePoints) {
            this.lifePoints = 0;
        } else {
            this.lifePoints -= attack;
        }
        return this.lifePoints;
    }
}
