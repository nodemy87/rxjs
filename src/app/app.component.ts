import { Component, OnInit } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  exclusive: boolean = false;
  constructor(private service: UtilityService)
  {}

  ngOnInit(): void{
     this.service.exclusive.subscribe(res => {
        this.exclusive = res;
     });
  }


}
