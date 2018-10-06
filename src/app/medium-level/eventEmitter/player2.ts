import { EventEmitter } from '@angular/core';

export class Player2 {
    lifePoints: number;
    changeLifePoint = new EventEmitter<number>();

    constructor() {
        this.lifePoints = 100;
    }

    removeLifePoints(attack: number) {
        if (attack >= this.lifePoints) {
            this.lifePoints = 0;
        } else {
            this.lifePoints -= attack;
        }
        this.changeLifePoint.emit(this.lifePoints);
    }
}
