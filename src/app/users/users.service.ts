import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './models/User';
import { HttpClient } from '@angular/common/http';
import  { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
const resourse = environment.resourses.users

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  getList(): Observable<User[]>{
    return this.http.get<User[]>(`${apiUrl}/${resourse}`);
  }

  get(id: number): Observable<User>{
    return this.http.get<User>(`${apiUrl}/${resourse}/${id}`);
  }

  update(user: User): Observable<User>{
    return this.http.put<User>(`${apiUrl}/${resourse}/${user.id}`, user);
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(`${apiUrl}/${resourse}`, user)
  }

  delete(id: number): Observable<void>{
    console.log('deleting user', id);
    return this.http.delete<void>(`${apiUrl}/${resourse}/${id}`)
  }

}
