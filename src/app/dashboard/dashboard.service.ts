import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  API_URL = "https://firestore.googleapis.com/v1/projects/ausy-germany/databases/(default)/documents/restu-runner/dashboard";

  tables = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor(private httpClient: HttpClient) { }

  getMenu(): number[] {
    this.httpClient.get(this.API_URL).subscribe(it => console.log(it));

    return this.tables;
  }
}
