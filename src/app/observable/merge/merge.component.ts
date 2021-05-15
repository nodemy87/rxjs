import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { interval, merge, Subscription } from 'rxjs';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {
  stop: Subscription;
  constructor(private service: UtilityService) { }

  ngOnInit(): void {

    const user1 = interval(1000).pipe(map( user1 => 'user1 ' + user1));
    const user2 = interval(2500).pipe(map( user2 => 'user2 ' + user2));
    const user3 = interval(1500).pipe(map( user3 => 'use3 ' + user3));
    const final = merge(user1,user2,user3)
    this.stop = final.subscribe(ures => {
      console.log(ures);
      this.service.prints(ures,'elcontainer');
    })
  }

  stopper(){
    this.stop.unsubscribe();
  }

}
