import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [UsersListComponent, UsersContainerComponent, UserDetailsComponent],
  providers: [UsersService]
})
export class UsersModule { }
