import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(-35px)', offset: .5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
      ])))
    ]),
  ],
})
export class AppComponent {
  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'large') ? 'small' : 'large';
  }
}
