import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock.tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: Task[] = TASKS;



}
