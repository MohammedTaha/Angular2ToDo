import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css']
})

export class ListItemComponent {
  @Input("todo") todo;

  updateTaskStatus():void{
    this.todo.isDone = !this.todo.isDone;
  }
}
