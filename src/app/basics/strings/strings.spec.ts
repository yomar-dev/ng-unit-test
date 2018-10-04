import { message } from './strings';

describe ('Strings test', () => {
    it('Should return a string', () => {
        const response = message('Yomar');
        expect(typeof response).toBe('string');
    });

    it('Should return a greeting with a name specify', () => {
        const name = 'Michelle';
        const response = message(name);
        expect(response).toContain(name);
    });
});
