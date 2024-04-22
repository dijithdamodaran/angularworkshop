import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ProjectName="Task-Tracker-App"

  ToggleAddTask(){
    alert('header button alert')
  }

}
