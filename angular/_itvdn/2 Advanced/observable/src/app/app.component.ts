import { Component, EventEmitter } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, map, take, debounce, buffer } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values: string = '';
  obs: Observable<number[]>;

  event: EventEmitter<number[]> = new EventEmitter();

  get data(): number[] {
    return this.values.trim().split('')
      .map(n => +n).filter(x => isNaN(x) === false);
  }
  
  ngOnInit(): void {
    const obs = new Observable((observer => {
      this.event.subscribe(numbers => {
        numbers.forEach(n => observer.next(n));
        console.log(11111111111)
      });
    }));

    this.obs = obs.pipe(
      buffer(
        obs.pipe( debounce(() => interval(1000)) )
      )
    ) as Observable<number[]>;

    this.obs.forEach(x => console.log(x));
  }

  next() {
    this.event.emit(this.data);
    this.values = '';
  }
}
