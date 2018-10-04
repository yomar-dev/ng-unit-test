import { validUser } from './booleans';

describe('Booleans test', () => {
    it('Should return true', () => {
        const response = validUser();
        expect(response).toBeTruthy();
    });
});
