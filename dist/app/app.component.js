"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var list_item_component_1 = require("./list-item.component");
var new_todo_component_1 = require("./new-todo.component");
var todo_util_service_1 = require("./todo-util.service");
var AppComponent = (function () {
    function AppComponent(todoUtilService) {
        this.todoUtilService = todoUtilService;
        this.title = "app works!";
        this.todos = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoUtilService.todoListItem$.subscribe(function (item) {
            _this.todos.push(item);
            //console.log("Item", item);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [list_item_component_1.ListItemComponent, new_todo_component_1.NewTodoComponent],
        }), 
        __metadata('design:paramtypes', [todo_util_service_1.TodoUtilService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map