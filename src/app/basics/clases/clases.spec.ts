import { Player } from './clases';

describe('Classess test', () => {
    let player = new Player();

    beforeEach(() => {
        player = new Player();
    });

    it('Should return 70 life points', () => {
        const response = player.removeLifePoints(30);
        expect(response).toBe(70);
    });

    it('Should return 50', () => {
        const response = player.removeLifePoints(50);
        expect(response).toBe(50);
    });

    it('Should return 0', () => {
        const response = player.removeLifePoints(120);
        expect(response).toBe(0);
    });
});
