import AbstractCommand from './AbstractCommand.js';

export default class CommandHistory {
  public commands: AbstractCommand[] = [];

  public push(command: AbstractCommand) {
    this.commands.push(command);
  }

  public remove(command: AbstractCommand) {
    this.commands = this.commands.filter(
      (c) => c.commandId !== command.commandId
    );
  }
}
