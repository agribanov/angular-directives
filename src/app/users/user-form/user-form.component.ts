import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user:User;

  @Output() save = new EventEmitter<User>()
  @Output() cancel = new EventEmitter<void>()

  onSaveBtnClick(user, userAge){
    console.log(userAge);
    this.save.emit(user);
  }

  onCancelBtnClick(){
    this.cancel.emit();
  }

}
