import { Component, OnInit, ViewChild , ElementRef , AfterViewInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements OnInit , AfterViewInit{
  constructor(private service: UtilityService) {
   }

   @ViewChild('myTestDiv') myTestDiv: ElementRef;

  ngOnInit(): void {}

ngAfterViewInit() {
  let count = 1;
  fromEvent(this.myTestDiv.nativeElement, 'click').subscribe(res => {

   // console.log(" Video " + count ++);
    const passcounter = `Video ${count ++}` ;
    this.service.prints(passcounter,'elcontainer');
    this.service.prints(passcounter,'elcontainer2');
  });
}


}
