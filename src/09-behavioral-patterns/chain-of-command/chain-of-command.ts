import AuthMiddleware from './classes/auth-middleware.js';
import Controller from './classes/controller.js';
import ValidateMiddleware from './classes/validate-middleware.js';

const controller = new Controller();
const validete = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validete).next(controller);

console.log(auth.handle({ userId: 1, body: 'I am OK' }));
