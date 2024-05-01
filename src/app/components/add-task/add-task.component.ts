import { Component,Output,EventEmitter } from '@angular/core';

import { Task } from 'src/app/Task';
//import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
text:string=''
day:string='';
reminder:boolean=false
@Output() onAddTask:EventEmitter<Task>=new EventEmitter();

onSubmit(){
  if(!this.text){
    alert('please add text');
    return;
  }
  const newTask={
    this:this.text,
    day:this.day,
    reminder:this.reminder
    
  }
  this.onAddTask.emit(newTask);
  this.text='';
  this.day='';
  this.reminder=false;
 
}
}
