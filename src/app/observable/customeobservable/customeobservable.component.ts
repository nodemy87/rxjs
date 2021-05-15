import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UtilityService } from '../../utility.service';


@Component({
  selector: 'app-customeobservable',
  templateUrl: './customeobservable.component.html',
  styleUrls: ['./customeobservable.component.css']
})
export class CustomeobservableComponent implements OnInit {
  tecStatus: any;
  subscription: Subscription;
  random: any[] = ['A','B','C'];
  constructor(private service: UtilityService) {

  }

  ngOnInit(): void {
    // Manual Data

    const customObservable = new Observable((observer: any) => {

      setTimeout(
        () => {
          observer.next('English');
        }, 1000);

      setTimeout(
      () => {
        observer.next('Marathi');
        // observer.error(new Error('Data Exit'));
        // observer.complete();
      }, 2000);

      setTimeout(
        () => {
          observer.next('Hindi');
        }, 3000);

      setTimeout(
        () => {
          observer.next('General');
          // this.tecStatus = 'error';
          this.tecStatus = 'completed';
        }, 4000);
    });

    customObservable.subscribe((data: any) => {
      console.log('Next Number: ' + data);
      this.service.prints(data, 'elcontainer');
    },
    (err) => {
      this.tecStatus = 'error';
    },
     () => {
        this.tecStatus = 'completed';
     });






     // coustome observable
     var count =1;
    const df = new Observable((obser) => {
      setInterval(() => {
        obser.next(`Emit Data ${count++}`);
      }, 1000);
      });

    this.subscription = df.subscribe(res => {
        console.log(res);
        if (count >= 6)
        {
          this.subscription.unsubscribe();
        }
        this.service.prints(res ,'elcontainer2');
    });


  }
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
