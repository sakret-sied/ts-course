import AddUserCommand from './add-user-command.js';
import CommandHistory from './command-history.js';
import User from './user.js';
import UserService from './user-service.js';

export default class Controller {
  public receiver: UserService;
  public history: CommandHistory = new CommandHistory();

  public addReceiver(receiver: UserService) {
    this.receiver = receiver;
  }

  public run() {
    const addUserCommand = new AddUserCommand(
      new User(1),
      this.receiver,
      this.history
    );
    addUserCommand.execute();
    console.log(addUserCommand.history);
    addUserCommand.undo();
    console.log(addUserCommand.history);
  }
}
