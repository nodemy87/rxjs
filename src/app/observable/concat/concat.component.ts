import { map, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { interval, merge, Subscription , concat} from 'rxjs';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  stop: Subscription;
  constructor(private service: UtilityService) { }
ngOnInit(): void {

  const user1 = interval(3000).pipe(map( user1 => 'user1 ' + user1), take(4));
  const user2 = interval(2000).pipe(map( user2 => 'user2 ' + user2), take(4));
  const user3 = interval(4000).pipe(map( user3 => 'use3 ' + user3), take(4));
  const final = concat(user1,user2,user3)

  this.stop = final.subscribe(ures => {
    console.log(ures);
    this.service.prints(ures,'elcontainer');
  })
}

stopper(){
  this.stop.unsubscribe();
}

}
