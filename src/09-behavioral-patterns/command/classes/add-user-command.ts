import AbstractCommand from './abstract-command.js';
import CommandHistory from './command-history.js';
import User from './user.js';
import UserService from './user-service.js';

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
