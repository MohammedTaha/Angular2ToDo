import { Injectable } from '@angular/core';
import {Subject}    from 'rxjs/Subject';
import {TODO} from "./models/toDo.model";


@Injectable()
export class TodoUtilService {
  constructor(){
    console.log("Service init");
  }
  private todoListItemSubject   = new Subject<TODO>();
  public todoListItem$  = this.todoListItemSubject.asObservable();

  addTodoItem(todoItem:TODO){
    this.todoListItemSubject.next(todoItem);
  }

}
