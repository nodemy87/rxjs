import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { AsyncsubjectComponent } from './observable/asyncsubject/asyncsubject.component';

import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';








const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  { path: 'observable', component: ObservableComponent,
    children: [
      { path: '', component: ListComponent},
      { path: 'fromevent' , component: FromeventComponent},
      { path: 'interval' , component: IntervalComponent},
      {path: 'offrom' , component: OfandfromComponent},
      {path: 'toarrayoperator' , component: ToarrayoperatorComponent},
      {path: 'coustome' , component: CustomeobservableComponent },
      {path: 'map', component: MapComponent},
      {path: 'pluck' , component: PluckComponent},
      {path: 'filter' , component: FilterComponent},
      {path: 'tap' , component: TapComponent},
      {path: 'take' , component: TakeComponent},
      {path: 'retry' , component: RetryComponent},
      {path: 'debounce' , component: DebounceTimeComponent},
      {path: 'subject' , component: SubjectComponent},
      {path: 'replaysubject', component: ReplaysubjectComponent},
      {path: 'asyncsubject' , component: AsyncsubjectComponent},
      {path: 'concat' , component: ConcatComponent},
      {path: 'merge' , component: MergeComponent}
    ]},
    { path: '**' , redirectTo: 'promise'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
