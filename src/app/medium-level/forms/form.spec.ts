import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';


describe('Medium Level - Forms', () => {
    let formComponent: FormRegister;

    beforeEach(() => {
        formComponent = new FormRegister(new FormBuilder());
    });

    it('Should create a form with two fields (email and password)', () => {
        expect(formComponent.form.contains('email')).toBeTruthy();
        expect(formComponent.form.contains('password')).toBeTruthy();
    });

    it('Email is required', () => {
        const emailField = formComponent.form.get('email');
        emailField.setValue('');
        expect(emailField.valid).toBeFalsy();
    });

    it('Should be a valid email', () => {
        const emailField = formComponent.form.get('email');
        emailField.setValue('yomar@gmail.com');
        expect(emailField.valid).toBeTruthy();
    });

    it('Password is required', () => {
        const fieldPassword = formComponent.form.get('password');
        console.log(fieldPassword);
        fieldPassword.setValue('12345');
        expect(fieldPassword.valid).toBeTruthy();
    });
});
