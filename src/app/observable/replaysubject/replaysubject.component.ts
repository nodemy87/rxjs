import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css']
})
export class ReplaysubjectComponent implements OnInit {

  user1 = ['angular1','angular2'];
  user2: any[] = [];
  user3: any[] = [];

  subscribeMode1: boolean = false;
  subscribeMode2: boolean = false;

  sup2 : Subscription;
  sup3 : Subscription;
  constructor(private service: UtilityService) { }

  ngOnInit(): void {
    this.service.videoEmit.subscribe(res=>{
      console.log(res);
      this.user1.push(res);
    })
  }

  AddVideo(myinput:any):void{
    this.service.videoEmit.next(myinput);

  }

  Usersubscribe(){
    if (this.subscribeMode1){
      this.sup2.unsubscribe()
    }
    else{
      this.sup2 = this.service.videoEmit.subscribe(res=>{
        this.user2.push(res);
      })
    }

    this.subscribeMode1 = !this.subscribeMode1;
  }

  Usersubscribe3(){
    if (this.subscribeMode2){
      this.sup3.unsubscribe()
    }
    else{
      this.sup3 = this.service.videoEmit.subscribe(res=>{
        this.user3.push(res);
      })
    }

    this.subscribeMode2 = !this.subscribeMode2;
  }

}
