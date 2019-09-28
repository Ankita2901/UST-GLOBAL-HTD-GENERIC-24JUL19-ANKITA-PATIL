import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
users = [] ;
  constructor() { }
collect(form : NgForm){
  console.log(form.value);
  form.reset();
  this.users.push(form.value);
  console.log(this.users);
}
  ngOnInit() {
  }

}
