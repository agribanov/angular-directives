import { Injectable } from '@angular/core';
import { USERS } from './users-mock';
import { Observable } from 'rxjs/Observable';
import { User } from './models/User';
import { of } from 'rxjs/observable/of';


@Injectable()
export class UsersService {
  constructor() { }

  getList(): Observable<User[]>{
    return of(USERS);
  }

  get(id: number): Observable<User>{
    const user = USERS.find(user => user.id === id);
    return of(user)
  }

}
