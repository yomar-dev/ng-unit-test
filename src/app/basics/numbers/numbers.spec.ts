import { increase } from './numbers';

describe('Numbers test', () => {
    it('Should return 100 if the number is greater than 100', () => {
        const response = increase(255);
        expect(response).toBe(100);
    });

    it('Should return the number + 1 if the number is less than 100', () => {
        const response = increase(32);
        expect(response).toBe(33);
    });
});
