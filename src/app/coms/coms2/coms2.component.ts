import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-coms2',
  templateUrl: './coms2.component.html',
  styleUrls: ['./coms2.component.css']
})
export class Coms2Component implements OnInit {

  username: any;
  constructor(private service: UtilityService) {
    this.service.username.subscribe(res => {
      this.username = res;
   });
  }

  ngOnInit() {
  }

  showname(myinput: any){
    // console.log(myinput.value);
    this.service.username.next(myinput.value);
  }

}
