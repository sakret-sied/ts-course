import Controller from './Classes/Controller.js';
import UserService from './Classes/UserService.js';

const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();
