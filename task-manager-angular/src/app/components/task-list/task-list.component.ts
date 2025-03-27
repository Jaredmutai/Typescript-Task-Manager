// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-list',
//   imports: [],
//   templateUrl: './task-list.component.html',
//   styleUrl: './task-list.component.less'
// })
// export class TaskListComponent {

// }

import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.listTasks();
  }

  completeTask(id: number) {
    this.taskService.completeTask(id);
  }
}

