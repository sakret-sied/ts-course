import Task from './Task.js';

export default class TaskList {
  private tasks: Task[] = [];

  public sortByPriority() {
    this.tasks = this.tasks.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      } else if (a.priority === b.priority) {
        return 0;
      } else {
        return -1;
      }
    });
  }

  public addTask(task: Task): void {
    this.tasks.push(task);
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  public count(): number {
    return this.tasks.length;
  }

  public getIterator() {
    return new PriorityIterator(this);
  }
}
