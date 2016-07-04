/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TodoUtilService } from './todo-util.service';

describe('TodoUtil Service', () => {
  beforeEachProviders(() => [TodoUtilService]);

  it('should ...',
      inject([TodoUtilService], (service: TodoUtilService) => {
    expect(service).toBeTruthy();
  }));
});
