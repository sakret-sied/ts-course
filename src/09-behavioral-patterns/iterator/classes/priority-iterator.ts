import IteratorInterface from '../interfaces/iterator-interface.js';
import Task from './task.js';
import TaskList from './task-list.js';

export default class PriorityIterator implements IteratorInterface<Task> {
  private position: number = 0;
  private taskList: TaskList;

  constructor(taskList: TaskList) {
    taskList.sortByPriority();
    this.taskList = taskList;
  }

  public current(): Task | undefined {
    return this.taskList.getTasks()[this.position];
  }
  public next(): Task | undefined {
    this.position += 1;
    return this.taskList.getTasks()[this.position];
  }
  public prev(): Task | undefined {
    this.position -= 1;
    return this.taskList.getTasks()[this.position];
  }
  public index(): number {
    return this.position;
  }
}
