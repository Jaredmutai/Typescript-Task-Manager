"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(title, description) {
        const task = {
            id: this.nextId++,
            title,
            description,
            completed: false
        };
        this.tasks.push(task);
        console.log(`Task "${title}" added.`);
    }
    listTasks() {
        console.log("\nCurrent Tasks:");
        this.tasks.forEach(task => {
            console.log(`[${task.completed ? '✔' : '✖'}] ${task.id}: ${task.title} - ${task.description}`);
        });
    }
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`Task "${task.title}" marked as completed.`);
        }
        else {
            console.log(`Task with ID ${id} not found.`);
        }
    }
}
exports.TaskManager = TaskManager;
