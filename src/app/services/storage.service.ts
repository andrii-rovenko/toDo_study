import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  save(tasks: Object): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  read(): any {
    if ( !!(localStorage.getItem('tasks') )) {
      return JSON.parse(localStorage.getItem('tasks'));
    } else {
      return [];
    }
  }

}
