import { Component, Input, Output, EventEmitter } from '@angular/core';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  inputs: ['deleteTask']
})
export class TaskComponent {
  @Input() text: string;
  @Input() checked: boolean;
  @Input() id: string;
  @Output() deleteTask = new EventEmitter();
  @Output() changeState = new EventEmitter();

  delete(){
    this.deleteTask.emit(this.id);
  }

  change(){
    this.changeState.emit(this.id);

    //this.checked = !this.checked;
    // console.log(this.id + " set state " + (this.checked ? "checked" : "unchecked"));
  }
}
