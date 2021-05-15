import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrls: ['./asyncsubject.component.css']
})
export class AsyncsubjectComponent implements OnInit {
  asyndata:any;
  constructor(private service: UtilityService) { }

  ngOnInit(): void {
    this.service.asyncsubject.subscribe(asres => {
       this.asyndata = asres;
    })
  }

  AddVideo(myinput:any):void{
    this.service.asyncsubject.next(myinput);
  }

  Completesub():any{
    this.service.asyncsubject.complete();

  }
}
