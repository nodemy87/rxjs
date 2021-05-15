import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
 sup: Subscription;
  tapArray: any[] = ['A', 'B', 'C', 'D'];
  constructor(private ser: UtilityService) { }

  ngOnInit(): void {

    const tapvar = interval(2000);
    this.sup = tapvar.pipe(tap(res => {
        if(res==4){
          this.sup.unsubscribe();
        }
    }), map(fg => this.tapArray[fg]))
     .subscribe(tares => {
       this.ser.prints(tares, 'elcontainer')
      console.log(tares);
    });

  }

}
