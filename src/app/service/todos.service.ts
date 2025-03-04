import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // this specifies that this service will be available in all the pages if don't want remove this
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Array<Todo>>(url);
  }
}
