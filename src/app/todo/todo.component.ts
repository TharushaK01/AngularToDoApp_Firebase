import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: ``
})
export class TodoComponent implements OnInit{

  todos: any[] = [];

  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges()
    .subscribe(item=>{
      this.todos = item;
    })
    
  }
  onClick(titleInput: HTMLInputElement){
    if (titleInput.value) {
      this.todoService.addTodo(titleInput.value);
      titleInput.value = "";
    }
    

  }

}
