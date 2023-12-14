import IForm from './Interfaces/IForm.js';
import { Validation } from './Types/Validation.js';

const form: IForm = {
  name: 'Vasya',
  password: '123',
};
console.log(form);

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Password incorrect' },
};
console.log(formValidation);
