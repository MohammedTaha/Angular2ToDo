import { Component, OnInit } from '@angular/core';
import {TodoUtilService} from "./todo-util.service";
import {TODO} from "./models/toDo.model";

@Component({
  moduleId: module.id,
  selector: 'new-todo',
  templateUrl: 'new-todo.component.html',
  styleUrls: ['new-todo.component.css']

})
export class NewTodoComponent implements OnInit {

  constructor(private todoUtilService:TodoUtilService){}
  onKeyPress(e: KeyboardEvent): void {
    let self: any = e.target;
    if (e.which == 13) {
      let taskDescription = self.value.trim();
      if(taskDescription){
        this.todoUtilService.addTodoItem(new TODO(self.value.trim(), false));
      }
      self.value = "";
    }
  }

  ngOnInit() {
  }

}
