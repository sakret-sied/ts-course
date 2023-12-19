import AddUserCommand from './AddUserCommand.js';
import CommandHistory from './CommandHistory.js';
import User from './User.js';
import UserService from './UserService.js';

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
