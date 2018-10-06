import { Player2 } from './player2';

describe('Player: Event Emitter test', () => {
    let player: Player2;

    beforeEach(() => {
        player = new Player2();
    });

    it('Should emit an event when the player is attacked', () => {
        let newLifePoints = 0;
        player.changeLifePoint.subscribe( lifePoint => {
            newLifePoints = lifePoint;
        });

        player.removeLifePoints(255);
        expect(newLifePoints).toBe(0);
    });

    it('Should emit an event when the player is attacked and survive if the attacked is less than 100', () => {
        let newLifePoints = 0;
        player.changeLifePoint.subscribe(lifePoints => {
            newLifePoints = lifePoints;
        });

        player.removeLifePoints(45);
        expect(newLifePoints).toBe(55);
    });
});
