import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TaskListComponent} from "./components/TaskList/taskList.component";
import {TaskComponent} from "./components/Task/task.component";

import {StorageService} from "./services/storage.service"

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
