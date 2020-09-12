import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../taskItem.model';
import { TaskItemService } from '../taskitem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskItem : TaskItem = new TaskItem();
  submitted = false;
  constructor(private taskItemService: TaskItemService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.taskItemService.createTask(this.taskItem)
    .subscribe(
      data=>{
        console.log(data);
        this.taskItem = new TaskItem();
        this.goToList();
      },
      error => console.log(error)
    )
  }
  onSubmit(){
    this.submitted = true;
    this.save();

  }

  goToList(){
    this.router.navigate(['tasks']);
  }

  
}
