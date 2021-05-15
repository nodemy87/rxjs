import { Component, OnInit , OnDestroy } from '@angular/core';
import { timer } from 'rxjs';
import { interval , Subscription} from 'rxjs';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit , OnDestroy {
   subplay: any;
   subscription: Subscription;
   color = true;
   cardstatus = false;
  constructor(private service: UtilityService) { }

  ngOnInit(): void {
    let count = 1;
    // const play = interval(1000);
    const play = timer(2000 , 1000);


    this.subscription = play.subscribe(data => {
     // console.log(data + '===>' + data++);
      const passdata = `Player ${count ++}`;
      this.service.prints(passdata,'elcontainer');
      this.service.prints(passdata,'elcontainer2');
      if (count >= 6)
      {
        this.color = false;
        this.subscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
