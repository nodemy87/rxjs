import { Component, OnInit } from '@angular/core';
import { interval , Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-toarrayoperator',
  templateUrl: './toarrayoperator.component.html',
  styleUrls: ['./toarrayoperator.component.css']
})
export class ToarrayoperatorComponent implements OnInit {
  subscription: Subscription;
  constructor(private service: UtilityService) { }

  ngOnInit(): void {
    const toArrays = interval(1000);

    this.subscription = toArrays.pipe( take(8) , toArray()).subscribe(tores => {
       console.log(tores);
       this.service.prints(tores, 'elcontainer');
       /*if (tores >= 6)
       {
        this.subscription.unsubscribe();
       }*/
       this.subscription.unsubscribe();
    });
  }

}
