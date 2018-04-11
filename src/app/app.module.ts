import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UsersService } from './users.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Route[] = [
  { path: '', redirectTo: 'list', pathMatch: 'full'}, // default route
  { path: 'list', component: ListComponent},
  { path: '**', component: NotFoundComponent} // Not found route
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    NotFoundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
