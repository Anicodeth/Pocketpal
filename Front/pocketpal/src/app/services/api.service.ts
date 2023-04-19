import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  private jwt: string = "<the-access-token>";
  private mainEndPoint: string = "http://Pocket-pal-api.vercel.app";
  private budgetEndPoint: string = this.mainEndPoint.concat("/budget");
  private headers: HttpHeaders | any;

  private budgetData: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.jwt = sessionStorage.getItem('jwt')!;
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.jwt,
      'Content-Type': 'application/json'
    });
  }

  requestBudgetData() {
    this.http.get(this.budgetEndPoint, { headers: this.headers }).subscribe(response => {
      this.budgetData = response;
    });
  }

  getBudgetData() {
    const budgetData =  [
      {
        name: 'Left',
        value: 80,
      },
      {
        name: 'Used Up',
        value: 20,
      },
    ];
    return budgetData;
    return this.budgetData;
  }
}
