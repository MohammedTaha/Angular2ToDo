/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ListItemComponent } from './list-item.component';

describe('Component: ListItem', () => {
  it('should create an instance', () => {
    let component = new ListItemComponent();
    expect(component).toBeTruthy();
  });
});
