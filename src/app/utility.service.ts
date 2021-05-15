import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  exclusive = new Subject<boolean>();
 // username = new Subject<any>();
 username = new BehaviorSubject('manoj');
 gender = new BehaviorSubject('Male');

 //Replay Subject
 videoEmit = new ReplaySubject<any>(3 ,2000);

 //Async Subject

 asyncsubject = new AsyncSubject<any>();

  constructor() { }

  prints(num: any , dividname: any){
    const el = document.createElement('li');
    el.innerText = num;
    document.getElementById(dividname)?.appendChild(el);
  }

}
