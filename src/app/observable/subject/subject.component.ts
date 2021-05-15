import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  username: any;
  gender: any;
  sup: Subscription;
  constructor(private service: UtilityService) {

    this.service.exclusive.next(true);
    this.service.username.subscribe(res => {
       this.username = res;
    });
  }

  ngOnInit(): void {

    const inter = interval(2000);

   this.sup = inter.subscribe( rt =>{
      console.log(rt);
    })

    this.service.gender.subscribe(gres => {
      this.gender = gres;
    })

  }

  changeMale(){
    let assignvalue = 'Female';
    console.log('ddd');

    this.service.gender.next(assignvalue);

    setTimeout(()=>{
      this.service.gender.next('Male');
      this.sup.unsubscribe();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.service.exclusive.next(false);
  }

}
