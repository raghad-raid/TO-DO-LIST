import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { TodoComponent } from './todo/todo.component';
import { Todo } from './todo.model';
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ TodoComponent, AddTodoComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
 todos: Todo[] = [];

  onAdd(title: string) {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title,
      done: false
    };
    this.todos.unshift(newTodo);
  }
   onDelete(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  onToggleDone(id: string) {
  const todo = this.todos.find(t => t.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
}
}
