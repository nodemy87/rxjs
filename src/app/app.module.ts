import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromeventComponent } from './observable/fromevent/fromevent.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfandfromComponent } from './observable/ofandfrom/ofandfrom.component';
import { ToarrayoperatorComponent } from './observable/toarrayoperator/toarrayoperator.component';
import { CustomeobservableComponent } from './observable/customeobservable/customeobservable.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceTimeComponent } from './observable/debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './observable/subject/subject.component';
import { Coms1Component } from './coms/coms1/coms1.component';
import { Coms2Component } from './coms/coms2/coms2.component';

import { Coms3Component } from './coms/coms3/coms3.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';




@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromeventComponent,
    IntervalComponent,
    OfandfromComponent,
    ToarrayoperatorComponent,
    CustomeobservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
    Coms1Component,
    Coms2Component,
    Coms3Component,
    ReplaysubjectComponent,
    AsyncsubjectComponent,
    ConcatComponent,
    MergeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
