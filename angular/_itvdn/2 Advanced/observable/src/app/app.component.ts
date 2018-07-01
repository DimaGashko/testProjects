import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(): void {
    console.clear();
    
    var obs = new Observable((observer) => {
      var timer = setInterval(() => {
        observer.next('Hi');
      }, 500);

      setTimeout(() => {
        observer.complete();
      }, 5000);

      return () => {
        clearInterval(timer);
      }
    });

    obs.subscribe(
      (next) => console.log(next),
      () => console.log('error'),
      () => console.log('complete')
    );
  }
}
