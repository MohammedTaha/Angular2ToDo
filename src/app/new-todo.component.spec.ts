/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { NewTodoComponent } from './new-todo.component';

describe('Component: NewTodo', () => {
  it('should create an instance', () => {
    let component = new NewTodoComponent();
    expect(component).toBeTruthy();
  });
});
