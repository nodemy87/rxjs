import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  obj = [
    {name: 'manoj', email: 'f@gmail.com' , mob: '9889898989', gender: 'Male'},
    {name: 'Pankaj', email: 'p@gmail.com' , mob: '962662626', gender: 'Female'},
    {name: 'Dinesh', email: 'd@gmail.com' , mob: '938938989', gender: 'Female'},
    {name: 'raj', email: 'raj@gmail.com' , mob: '9636366363', gender: 'Female'},
    {name: 'ganesh', email: 'g@gmail.com' , mob: '787287872', gender: 'Male'},
  ];
  dataRender: any;
  dataRender2: any;
  constructor() {

   }

  ngOnInit(): void {
  const pluckData = from(this.obj).pipe(filter(data => data.name.length > 2 ) , toArray())
    .subscribe(pluckres => this.dataRender = pluckres);

  // Filter of Gender
    const filtergender = from(this.obj).pipe( filter(member => member.gender == 'Male'), toArray()).subscribe(member => this.dataRender2 = member);



  }


}
