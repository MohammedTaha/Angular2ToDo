"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var todo_util_service_1 = require("./app/todo-util.service");
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [todo_util_service_1.TodoUtilService]);
//# sourceMappingURL=main.js.map