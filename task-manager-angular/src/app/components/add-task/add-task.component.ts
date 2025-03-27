import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  onSubmit() {
    if (this.title && this.description) {
      this.taskService.addTask(this.title, this.description);
      this.title = '';
      this.description = '';
    }
  }
}
