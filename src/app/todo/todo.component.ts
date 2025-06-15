import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { Todo } from '../todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  
  @Input() todos: Todo[] = [];
  @Output() delete = new EventEmitter<string>();
  @Output() toggleDone = new EventEmitter<string>();

  onDelete(id :string){
  this.delete.emit(id);
}
  onToggleDone(id: string) {
    this.toggleDone.emit(id);
  }
}
  

