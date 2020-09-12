import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../taskItem.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskItemService } from '../taskitem.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  id:number;
  taskItem : TaskItem;

  constructor(private route:ActivatedRoute,private router:Router,private taskItemService: TaskItemService) { }

  ngOnInit() {
    this.taskItem = new TaskItem();

    this.id = this.route.snapshot.params['id'];

    this.taskItemService.getTask(this.id)
    .subscribe(
      data=>{
        console.log(data);
        this.taskItem = data;
      },
      error => console.log(error)
    );
  }
  list(){
    this.router.navigate(['tasks']);
  }

}
