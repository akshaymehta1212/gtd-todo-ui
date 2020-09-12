import { Component, OnInit } from '@angular/core';
import { TaskItemService } from '../taskitem.service';
import { TaskItem } from '../taskItem.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskItems: Observable<TaskItem[]>;
  constructor(private taskItemService: TaskItemService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.taskItems = this.taskItemService.getAllTasks();
  }

  deleteTask(id:number){
    this.taskItemService.deleteTask(id)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error =>{
       console.log(error); 
      }
    )
  }

  taskDetails(id:number){
    this.router.navigate(['details',id]);
  }

  createTask(){
    this.router.navigate(['create']);
  }

}
