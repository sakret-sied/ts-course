import AbstractCommand from './AbstractCommand.js';
import CommandHistory from './CommandHistory.js';
import User from './User.js';
import UserService from './UserService.js';

export default class AddUserCommand extends AbstractCommand {
  constructor(
    private user: User,
    private receiver: UserService,
    history: CommandHistory
  ) {
    super(history);
  }

  public override execute(): void {
    this.receiver.saveUser(this.user);
    this.history.push(this);
  }

  public undo(): void {
    this.receiver.deleteUser(this.user.userId);
    this.history.remove(this);
  }
}
