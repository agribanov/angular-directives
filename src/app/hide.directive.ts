import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHide]'
})
export class HideDirective {

  @Input('appHide') isVisible: boolean;

  constructor() { 
    console.log(this.isVisible)
  }

  

}
