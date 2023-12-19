import AuthMiddleware from './Classes/AuthMiddleware.js';
import Controller from './Classes/Controller.js';
import ValidateMiddleware from './Classes/ValidateMiddleware.js';

const controller = new Controller();
const validete = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validete).next(controller);

console.log(auth.handle({ userId: 1, body: 'I am OK' }));
