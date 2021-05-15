import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, filter, map, retry, retryWhen, scan, take, takeLast } from 'rxjs/operators';


@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  personData: any;
  fetching: boolean = false;
  status: any = 'fetch Details';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  fetchdetails = () => {
    this.fetching = true;
    this.http.get('https://jsonplaceholder.cypress.io/todos/1').pipe(/*retry(1)*/
     retryWhen(err => err.pipe(
       delay(3000),
       scan((retrycount) => {
            if (retrycount >= 5){
              throw err;
            }else{
              retrycount = retrycount + 1;
              console.log('retraycount ' + retrycount);
              this.status = 'RetrayCount Attempt ' + retrycount;
              return retrycount;
            }
       }, 0)
     ))
    ).subscribe(res => {
     // console.log(typeof res);
      this.personData = res;
      this.fetching = false;
      this.status = 'fetched';
    },
     (err) => {
       console.log(err);
       this.status = 'Error';
       this.fetching = false;
     }
    );
  }

  showdata = ()=>{
    this.fetchdetails();

  }

}
