import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  toggleAddTask() {
    console.log('toggle');
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string) {
    console.log('route:', route);
    console.log('this.router.url:', this.router.url === route);
    return this.router.url === route;
  }
}
