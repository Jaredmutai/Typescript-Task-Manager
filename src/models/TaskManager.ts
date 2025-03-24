import { Task } from './Task';

export class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string, description: string): void {
    const task: Task = {
      id: this.nextId++,
      title,
      description,
      completed: false
    };
    this.tasks.push(task);
    console.log(`Task "${title}" added.`);
  }

  listTasks(): void {
    console.log("\nCurrent Tasks:");
    this.tasks.forEach(task => {
      console.log(`[${task.completed ? '✔' : '✖'}] ${task.id}: ${task.title} - ${task.description}`);
    });
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Task "${task.title}" marked as completed.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
}
