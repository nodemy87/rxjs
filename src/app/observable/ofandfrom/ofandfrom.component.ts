import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-ofandfrom',
  templateUrl: './ofandfrom.component.html',
  styleUrls: ['./ofandfrom.component.css']
})
export class OfandfromComponent implements OnInit {
  // ofarray: any[] = ['manoj' , 'jay', 'raj'];
  obj = {name: 'manoj', age: '32', email: 'm@gmail.com' };
  constructor(private service: UtilityService) { }

  ngOnInit(): void {
    const argument = of('manoj', 'datta', 'sunil', 'anil', 'dipak', 'dilip');
    argument.subscribe(res => {
        // console.log(res);
        this.service.prints(res, 'elcontainer');
    });

   // object
    const argument2 = of(this.obj);
    argument2.subscribe(res => {
        // console.log(res);
        this.obj = res;
        // this.service.prints(res, '');
    });

    // From ex...Array
    const farray = from(['manoj', 'ganesh', 'raj']);
    farray.subscribe(fres => {
       console.log(fres);
      this.service.prints(fres, 'elcontainer3');

    });

    // Promise
    const fpromise = new Promise(resolve => {
        setTimeout(() => {
            let arr = ['manoj','shimpi'];
            resolve(`Promise Resolved   ${arr}`);
        }, 3000);
    });

    const convertpromis = from(fpromise);
    convertpromis.subscribe(pres => {
       // console.log(pres);
       this.service.prints(pres, 'elcontainer4');
    });



    const scb = from('manoj shimpi at post bharwade');
    scb.subscribe(sres => {
       // console.log(pres);
       this.service.prints(sres, 'elcontainer5');
    });



    // string to observable
  }

}
