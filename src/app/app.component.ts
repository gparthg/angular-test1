import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  slideIndex: number = 0;
  timeoutHandler$: any;
  titlesHovered: boolean = false;
  slidesList = [
    {
      title: 'Models',
      img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Others-min.png',
    },
    {
      title: 'Designers',
      img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Photogr-min.png',
    },
    {
      title: 'Make-up Artists',
      img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    },
    // {
    //   title: 'Stylists',
    //   img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    // },
    // {
    //   title: 'Photographers',
    //   img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    // },
    // {
    //   title: 'Actors',
    //   img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    // },
    // {
    //   title: 'Musicians',
    //   img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    // },
    // {
    //   title: 'Trainers',
    //   img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    // },
    // {
    //   title: 'Dancers',
    //   img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    // },
    // {
    //   title: 'And others...',
    //   img: 'https://stackblitz.com/files/angular-ivy-d3hx62/github/gparthg/angular-test1/master/src/assets/Models-min.png',
    // }
  ];
  constructor() {}
  ngOnDestroy(): void {
    if (this.timeoutHandler$) {
      clearTimeout(this.timeoutHandler$);
      console.log('Clearing interval', this.timeoutHandler$);
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.startAnimation());
  }

  startAnimation() {
    this.showSlides();
  }
  showSlides() {
    if (this.timeoutHandler$) {
      clearTimeout(this.timeoutHandler$);
    }
    const slides: any = document.getElementsByClassName('slideImages');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1;
    }
    slides[this.slideIndex - 1].style.display = 'block';
    this.timeoutHandler$ = setTimeout(() => this.showSlides(), 2500); // Change image every 2.5 seconds
  }

  titleHovered(index: number, status: boolean) {
    // console.log('Hovering:',status);
    // this.titlesHovered = status;
    // this.showSlides();
  }
}
