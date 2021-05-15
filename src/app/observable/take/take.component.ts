import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  takeArray: any[] = ['A', 'B', 'C' , 'D', 'E'];
  constructor( private service: UtilityService) { }

  ngOnInit(): void {

    // const takes = interval(2000);
    const takes = from(this.takeArray);
    takes.pipe(take(2)).subscribe(res => {
      // console.log('sub ===>' + res);
      this.service.prints(res, 'elcontainer')
    });

    //const takes2 = interval(2000);
    takes.pipe(takeLast(2)).subscribe(res => {
      // console.log('sub ===>' + res);
      this.service.prints(res, 'elcontainer2')
    });


     const cc = interval(2000);
    const condi = fromEvent(document , 'click');
    cc.pipe(takeUntil(condi), map( hh => hh)).subscribe(res => {
      // console.log('sub ===>' + res);
      this.service.prints(res, 'elcontainer3');
    });
  }

}
