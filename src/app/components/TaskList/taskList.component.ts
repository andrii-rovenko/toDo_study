import {Component, Input} from '@angular/core';
import { TaskComponent as Task } from './../Task/task.component';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'task-list',
  templateUrl: './taskList.component.html',
  styleUrls: ['./taskList.component.css']
})
export class TaskListComponent {
  tasks: Task[];
  newTask: string;

  constructor(private storageService: StorageService) {
    ///Test feature
    // if ((typeof localStorage !== 'undefined') && (localStorage !== null) && (localStorage.getItem('tasks'))) {
    if ( !!(localStorage.getItem('tasks') )) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
      this.tasks = [];
    }
    ///End of test feature

    ///LocalStorage test feature
    this.tasks = storageService.read();
    ///End of localStorage test feature

    //this.tasks = [];
    this.newTask = '';
  }

  addTask(text) {
    let tmp = new Task();
    tmp.text = text;
    tmp.checked = false;
    tmp.id = new Date().getTime().toString();
    this.tasks.push(tmp);
    this.newTask = '';
    this.storageService.save(this.tasks);
    //localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(el => (el.id !== id) );
    this.storageService.save(this.tasks);
    //localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log(id + " delete ");
  }

  changeState(id) {
    this.tasks.forEach(el => {
      if (el.id === id) {
        el.checked = !el.checked;
        console.log(el.id + " set state " + (el.checked ? "checked" : "unchecked"));
      }
    });
    this.storageService.save(this.tasks);
  }

}
