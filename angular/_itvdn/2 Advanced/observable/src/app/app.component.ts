import { Component, EventEmitter } from '@angular/core';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values: string = '';
  obs: Observable<number>;

  event: EventEmitter<number[]> = new EventEmitter();

  get data(): number[] {
    return this.values.trim().split('')
      .map(n => +n).filter(x => isNaN(x) === false);
  }
  
  ngOnInit(): void {
    //const obs: Observable<number> = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    this.obs = new Observable((observer => { 
      this.event.subscribe(numbers => { 
        numbers.forEach(n => observer.next(n));
      });
    }));


    this.obs.pipe(filter(x => x % 2 === 0))
      .pipe(map(x => x + '.'))
      .forEach(x => console.log(x));
  }

  next() {
    this.event.emit(this.data);
    this.values = '';
  }
}
