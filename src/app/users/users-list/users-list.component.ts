import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users$ = this.usersService.getList();
  }

  onDeleteUserClick(event, id: number){
    event.preventDefault();
    event.stopPropagation();
    
    this.users$ = this.usersService.delete(id)
      .switchMap(() => this.usersService.getList());
  }

}
