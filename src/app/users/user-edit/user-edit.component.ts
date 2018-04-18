import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../models/User';
import { UserAddComponent } from '../user-add/user-add.component';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends UserAddComponent implements OnInit {
  user$: Observable<User>

  ngOnInit() {
    this.user$ = this.route.paramMap.switchMap((params: ParamMap) => {
      const id = +params.get('id');
      console.log(id);

      return this.usersService.get(id);
    }).startWith((new User));
  }

  onFormSave(user){
    
    this.usersService.update(user)
      .subscribe(()=> this.goToUsersList());
  }

  goToUsersList(){
    this.router.navigate(['../../', 'list'], {relativeTo: this.route})
  }

}
