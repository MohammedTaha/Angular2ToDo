import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {TodoUtilService} from "./app/todo-util.service"

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [TodoUtilService]);

