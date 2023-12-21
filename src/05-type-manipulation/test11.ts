import FormInterface from './interfaces/form-interface.js';
import { ValidationType } from './types/validation-type.js';

const form: FormInterface = {
  name: 'Vasya',
  password: '123',
};
console.log(form);

const formValidation: ValidationType<FormInterface> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Password incorrect' },
};
console.log(formValidation);
