import { Component , OnInit } from '@angular/core';
import {ListItemComponent} from "./list-item.component";
import {NewTodoComponent} from "./new-todo.component";
import {TodoUtilService} from "./todo-util.service";
import {TODO} from "./models/toDo.model";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ListItemComponent, NewTodoComponent],
})

export class AppComponent implements OnInit{

  public todos:TODO[];
  constructor(private todoUtilService:TodoUtilService){
    this.todos = [];
  }

  ngOnInit (){
    this.todoUtilService.todoListItem$.subscribe(item=>{
      this.todos.push(item);
      //console.log("Item", item);
    });
  }
}
