import { Injectable } from '@angular/core';
import { USERS } from './users-mock';
import { User } from './models/User';
import  { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  users: User[] = USERS

  constructor() { }

  getList():Observable<User[]>{
    return of(this.users).share();
  }

  deleteUser(user: User):Observable<void>{
    this.users = this.users.filter(u => u !== user);
    return of(null)
  }

}
