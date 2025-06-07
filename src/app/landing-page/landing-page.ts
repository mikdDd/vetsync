
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';
import {Page4} from '../page4/page4';
import {Page5} from '../page5/page5';
import {Page6} from '../page6/page6';
@Component({
  selector: 'app-landing-page',
  imports: [
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  @ViewChildren('page') pages!: QueryList<ElementRef>;
  @ViewChild('prev') prev!: ElementRef;
  @ViewChild('next') next!: ElementRef;

  idlePeriod = 100;
  animationDuration = 1000;
  lastAnimation = 0;
  index = 0;





}
