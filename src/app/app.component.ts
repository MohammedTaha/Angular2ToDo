import { Component } from '@angular/core';
import {ListItemComponent} from "./list-item.component"

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ListItemComponent]
})
export class AppComponent {
  
  onKeyPress(e: KeyboardEvent): void {
    let self: any = e.target;
    if (e.which == 13) {
      self.value = "";
      console.log("Inside If");
    }
  }
}
