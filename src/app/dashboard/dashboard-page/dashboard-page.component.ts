import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { BehaviorSubject, combineLatest, filter, from, interval, map, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  tables: number[] = [];

  constructor(private service: DashboardService) {
    this.tables = this.service.getMenu();
  }
  handleMenuSelection($event: string) {
    console.log($event);
  }

  ngOnInit(): void {
    /*const subject = new BehaviorSubject<string>('init');
    //subject.next('test');  // service a
    //subject.next('some values ...');  // service a



    subject.subscribe(console.log); //component a

    subject.next('another test'); // service b
    *
     */

    const obsv = from([1,2,3,4]);

    const obsv2 = from([6,8,9]);

    //obsv.pipe(combineLatest([obsv2])).subscribe(console.log);


  }
}
