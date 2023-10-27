import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject, concat, delay, filter, first, from, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular App!';


  
constructor() {

}
  ngOnInit() {
    
    // const data = 'My Observable'
    // console.log(data)
    // of(data).subscribe(result => console.log(result));

    // const arr$ = of(1,2,3).pipe(
    //   delay(3000),
    //   tap(res => console.log('Values are executed after 3 sec.'))
    // )
    // const arr2$ = of(9,10,11,234, 61, 105, 422).pipe(
    //   tap(result => console.log('Emitted Value before entering Filter', result)),
    //   first(),
    //   // take(2),
    //   map(val => val * 2),
    //   filter(val => val > 100),
    //   tap(result => console.log('Emitted Value: ', result)),
    // ).subscribe()


    // of(arr$, arr2$).subscribe(result => console.log({result}))

    // of([arr$, arr2$]).subscribe(result => console.log({result}));

    // from(data).subscribe(data => console.log({data}));

    // concat(arr$, arr2$).subscribe(data => console.log({result: data}))

  }
}
