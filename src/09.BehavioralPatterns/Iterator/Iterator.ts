import Task from './Classes/Task.js';
import TaskList from './Classes/TaskList.js';

const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));

const iterator = taskList.getIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.index());
