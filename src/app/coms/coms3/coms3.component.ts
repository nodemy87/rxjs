import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-coms3',
  templateUrl: './coms3.component.html',
  styleUrls: ['./coms3.component.css']
})
export class Coms3Component implements OnInit {

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
