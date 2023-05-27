import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  text!: string;
  day!: Date;
  showAddTask!: boolean;
  reminder: boolean = false;
  subscription!: Subscription;

  @Output() onAddTask = new EventEmitter<Task>();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add Task.');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.text = '';
    this.day = new Date();
    this.reminder = false;

    this.onAddTask.emit(newTask);
  }
}
