import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    const todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call the server when a new todo item is added', function () {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', function () {
    const todo = { id: 1 };

    const spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ]);

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('shouldset the message property if server returns an error when adding a new todo', function () {
    const error = 'Error from the server';
    const spy = spyOn(service, 'add').and.returnValue(Observable.throw(error) );

    component.add();

    expect(component.message).toBe(error);
  });
});
