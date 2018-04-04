import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PreviewImageComponent } from './preview-image/preview-image.component';
import { HideDirective } from './hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    PreviewImageComponent,
    HideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
