import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './models/User';

import { USERS } from './users-mock';
import { UsersService } from './users.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser: User
  users$: Observable<User[]>
  subscribtion: Subscription

  constructor(private usersService: UsersService){

  }

  ngOnInit(){
    this.getUsers();

    // this.subscribtion = this.usersService.getList().subscribe((x) => console.log(x));
  }

  ngOnDestroy(){
    // this.subscribtion.unsubscribe();
  }

  getUsers(){
    this.users$ = this.usersService.getList();
  }

  onSelect(user: User){
    this.currentUser = user;
  }

  onDeleteUser(user: User){
    this.users$ = this.usersService
      .deleteUser(user)
      .switchMap(() => this.usersService.getList())
      ;
    this.currentUser = null;
  }
}
