interface IForm {
  name: string;
  password: string;
}

const form: IForm = {
  name: 'Vasya',
  password: '123',
};

type IsValid = { isValid: true } | { isValid: false; errorMessage: string };

type Validation<T> = { [K in keyof T]: IsValid };

const formValidation: Validation<IForm> = {
  name: { isValid: true },
  password: { isValid: false, errorMessage: 'Password incorrect' },
};
