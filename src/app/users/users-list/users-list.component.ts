import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

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

}
