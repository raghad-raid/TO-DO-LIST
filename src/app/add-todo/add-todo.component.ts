import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
tit:string='To Do List ✅'
title='';
imgLink:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsclkOKUOnCnOd9Md_Gy59SR9wCvNpQpbKgw&s";

@Output() add = new EventEmitter<string>();

onAdd(){
   if (this.title==='') 
    return;
  this.add.emit(this.title);
  this.title='';
}
}
