import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
  obj = [
    {name: 'manoj', email: 'f@gmail.com' , mob: '9889898989'},
    {name: 'Pankaj', email: 'p@gmail.com' , mob: '962662626'},
    {name: 'Dinesh', email: 'd@gmail.com' , mob: '938938989'},
    {name: 'raj', email: 'raj@gmail.com' , mob: '9636366363'},
    {name: 'ganesh', email: 'g@gmail.com' , mob: '787287872'},
  ];
  dataRender: any;
  constructor() { }

  ngOnInit(): void {

    const pluckData = from(this.obj).pipe(pluck('name','email','mob'),toArray()).subscribe(pluckres => this.dataRender = pluckres);

  }

}
