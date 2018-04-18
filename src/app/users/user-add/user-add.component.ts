import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User

  constructor(protected usersService: UsersService, 
    protected router: Router,
    protected route: ActivatedRoute
  ){}

  ngOnInit() {
    this.user = new User;
  }

  onFormSave(user){
    console.log('onFormSave', user);

    this.usersService.create(user)
      .subscribe(()=> this.goToUsersList());
  }

  onFormCancel(){
    this.goToUsersList();
  }

  goToUsersList(){
    this.router.navigate(['../', 'list'], {relativeTo: this.route})
  }

}
