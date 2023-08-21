import { Injectable } from '@angular/core';
import { ITable, MOCK_TABLES, TableStatus } from '../../../model/table.interface';
import { BehaviorSubject, combineLatest, map, Observable, of, Subject, switchMap, timer, withLatestFrom } from 'rxjs';
import { FirebaseDashboardDocument } from '../../../model/firebase.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  API_URL = "https://firestore.googleapis.com/v1/projects/ausy-germany/databases/(default)/documents/restu-runner/dashboard";

  tables: ITable[] = [...MOCK_TABLES];

  tables$ = new Subject<ITable[]>();
  filterValue$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {
  }


  getTables(): Observable<ITable[]> {
    return combineLatest([this.tables$, this.filterValue$]).pipe( map(([tables, filterValue]) => {
      if (filterValue.length > 0) {
        return tables.filter(table => table.status.includes(filterValue));
      } else {
        return tables;
      }
    }));
  }

  public getMenu(): Observable<string[]> {
    return this.http
      .get<FirebaseDashboardDocument>(this.API_URL)
      .pipe(
        map(response => response.fields.menu.arrayValue.values.map(it => it.stringValue))
      );
  }

  applyFilter(filterValue: string): void {
    this.filterValue$.next(filterValue);
  }


  updateTable(table: ITable): void {
    const index = this.tables.findIndex(t => t.id === table.id);
    if (table.status === TableStatus.ORDERED) {
      this.startCookingForTable(table);
    } else {
      table.notify = false;
    }
    this.tables[index] = table;
    this.tables$.next(this.tables);
  }


  fetchTables(): void {
    this.tables = [...MOCK_TABLES];
    this.tables$.next(this.tables);
  }


  startCookingForTable(table: ITable) {
    this.addMealToCookingQueue(table).subscribe((table) => {
      this.notifyTable(table.id);
    })
  }

  addMealToCookingQueue(table: ITable): Observable<ITable> {
    return timer(5000).pipe(switchMap(() => {
      return of(table);
    }));
  }


  notifyTable(tableId: string): void {
    const index = this.tables.findIndex(t => t.id === tableId);
    this.tables[index].notify = true;
    this.tables$.next(this.tables);
  }


/*  private startCooking(meal: IMeal) {
    setTimeout(() => {
      this.notifyTable(meal.tableId)
    }, 5000);
  }*/

}
