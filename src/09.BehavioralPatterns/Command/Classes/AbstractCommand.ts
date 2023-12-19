import CommandHistory from './CommandHistory.js';

export default abstract class AbstractCommand {
  public commandId: number;

  public abstract execute(): void;

  constructor(public history: CommandHistory) {
    this.commandId = Math.random();
  }
}
