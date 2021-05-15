import { Component, OnInit } from '@angular/core';
import { interval , Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  sub : Subscription;
  msgData: any;
  constructor(private service: UtilityService) { }

  ngOnInit(): void {
    const minterval = interval(200);

    this.sub = minterval.pipe(map( data => 'Players ' + data))
    .subscribe( res => {
      // console.log(`${res}`);
      this.msgData = res;
      // console.log(this.msgData);
      // this.service.prints(this.msgData, 'elcontainer')
    });

    setTimeout(() => {
      this.sub.unsubscribe();
    }, 2000);

  }



}
