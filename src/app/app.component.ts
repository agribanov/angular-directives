import { Component } from '@angular/core';
// import { GaleryImage } from './models/GaleryImage';

// const list: GaleryImage[] = [
//   {
//     title: 'Image 1',
//     src: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg'
//   }
// ]

const list: string[] = [
  'https://lintvwpri.files.wordpress.com/2017/02/pic-of-the-day-2-13.jpg',
  'https://img.etimg.com/thumb/msid-62982427,width-643,imgsize-79608,resizemode-4/with-google-removing-view-image-button-microsofts-bing-to-make-big-gains.jpg',
  'https://gweb-earth.storage.googleapis.com/assets/google_earth_banner.jpg',
  'https://www.w3schools.com/howto/img_fjords.jpg'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mainImageSrc = 'https://www.w3schools.com/howto/img_fjords.jpg'
  list = list
  isPanelVisible = false

  togglePanel(){
    this.isPanelVisible = !this.isPanelVisible;
  }

  onImageSelect(source: string){
    this.mainImageSrc = source;
  }

  onMainImageClick(source: string){
    const currentIndex = this.list.indexOf(source);
    let newIndex = currentIndex + 1;

    if ((this.list.length - 1) == currentIndex){
      newIndex = 0;
    }

    this.onImageSelect(this.list[newIndex]);

  }

}
