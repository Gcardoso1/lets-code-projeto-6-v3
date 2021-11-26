import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority } from './../../models/task.model';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'pages-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasksList: Task[] = [];
  errorMessage: any

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router:Router) {}

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('userData') || '{}')[0]["id"]);
    this.tasksList = [
      {
        title: "Assistir à aula do curso Santander Coders",
        description: "Devo reassistir à última aula de Angular para revisar o conteúdo.",
        dueDate: new Date(),
        priority: TaskPriority.Medium,
        labels: [],
      },
      {
        title: "Fazer a Atividade 05 da Forca 2.0",
        description: "Devo reunir com meu grupo, implementar e testar o trabalho.",
        dueDate: new Date(),
        priority: TaskPriority.High,
        labels: [],
      }
    ];

    this._api.postTypeRequest('user/read-task', {id_user:JSON.parse(localStorage.getItem('userData') || '{}')[0]["id"]}).subscribe((res: any) => {
      if (res.status) {
        console.log(res)
        this.tasksList = res.data
      } else {
      }
    }, err => {
      this.errorMessage = err['error'].message;
    });    
  }

  criarTask(){    
    this._router.navigate(['/create']);
  }

}
