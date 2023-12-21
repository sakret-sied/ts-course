import Controller from './classes/controller.js';
import UserService from './classes/user-service.js';

const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();
