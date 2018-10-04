import { getRobots } from './arrays';

describe('Arrays test', () => {
    it('Should return at least 3 robots', () => {
        const response = getRobots();
        expect(response.length).toBeGreaterThanOrEqual(3);
    });

    it('Should exist MegaMan and Ultron', () => {
        const response = getRobots();
        expect(response).toContain('MegaMan');
        expect(response).toContain('Ultron');
    });
});
