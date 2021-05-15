import { Component, OnInit , ElementRef , ViewChild , AfterViewInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;

  requestData2: any = null;
  requestData: any = null;

  constructor(private loading: LoadingBarService) { }

  ngAfterViewInit(): void {

    const seacrhItem = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    );
    seacrhItem.subscribe(res => {
      console.log(res);
      this.requestData = res;
      this.loading.start();

      setTimeout(() => {
        this.requestData = null;
        this.loading.stop();
        }, 2000);
    });


    //Distinc

    const seacrhItem2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    seacrhItem2.subscribe(res => {
      console.log(res);
      this.requestData2 = res;
      this.loading.start();

      setTimeout(() => {
        this.requestData2 = null;
        this.loading.stop();
        }, 2000);
    });
  }

}
