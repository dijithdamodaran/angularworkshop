import { Injectable } from '@angular/core';
//import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import {Observable,of, take} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl ='http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    //const tasks=of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);

  }

  deleteTask(task:Task):Observable<Task>{
    const Url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(Url);
  }
}
