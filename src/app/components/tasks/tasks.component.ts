import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
//import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks:Task[]=[];
  constructor(private taskService:TaskService){}
  ngOnInit():void{
    this.taskService.getTasks().subscribe(tasks=>{
      this.tasks=tasks;
    });
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t=>t.id != task.id))
  }

}
