import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskItem } from './taskItem.model';

@Injectable({
  providedIn: 'root'
})
export class TaskItemService {

  private baseUrl = 'http://192.168.0.105:9090/gtd-todo/api/toDoItems';

  constructor(private http: HttpClient) { }

  getTask(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTask(taskItem: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,taskItem);
  }
  
  updateTask(id: number,value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteTask(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  getAllTasks():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  

}
