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
var todo_util_service_1 = require("./todo-util.service");
var toDo_model_1 = require("./models/toDo.model");
var NewTodoComponent = (function () {
    function NewTodoComponent(todoUtilService) {
        this.todoUtilService = todoUtilService;
    }
    NewTodoComponent.prototype.onKeyPress = function (e) {
        var self = e.target;
        if (e.which == 13) {
            var taskDescription = self.value.trim();
            if (taskDescription) {
                this.todoUtilService.addTodoItem(new toDo_model_1.TODO(self.value.trim(), false));
            }
            self.value = "";
        }
    };
    NewTodoComponent.prototype.ngOnInit = function () {
    };
    NewTodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-todo',
            templateUrl: 'new-todo.component.html',
            styleUrls: ['new-todo.component.css']
        }), 
        __metadata('design:paramtypes', [todo_util_service_1.TodoUtilService])
    ], NewTodoComponent);
    return NewTodoComponent;
}());
exports.NewTodoComponent = NewTodoComponent;
//# sourceMappingURL=new-todo.component.js.map