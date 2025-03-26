import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  addTask(title: string, description: string): void {
    const task: Task = {
      id: this.nextId++,
      title,
      description,
      completed: false
    };
    this.tasks.push(task);
  }

  listTasks(): Task[] {
    return this.tasks;
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
    }
  }
}
