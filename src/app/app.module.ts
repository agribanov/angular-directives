import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersModule } from './users/users.module';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersContainerComponent } from './users/users-container/users-container.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

const routes: Route[] = [
  { path: '', redirectTo: 'users', pathMatch: 'full'}, // default route
  { path: 'users', component: UsersContainerComponent, children:[
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: UsersListComponent},
    { path: 'list/:id', component: UserDetailsComponent}
  ]},
  { path: '**', component: NotFoundComponent} // Not found route
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
