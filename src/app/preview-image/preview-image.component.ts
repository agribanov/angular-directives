import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.css']
})
export class PreviewImageComponent implements OnInit {

  @Input() source: string
  @Output() select = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onImageClick(){
    this.select.emit(this.source);
  }

}
