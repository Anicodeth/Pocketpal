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
        name: 'Germany',
        value: 40632,
      },
      {
        name: 'United States',
        value: 49737,
      },
      {
        name: 'France',
        value: 36745,
      },
      {
        name: 'United Kingdom',
        value: 36240,
      },
      {
        name: 'Spain',
        value: 33000,
      },
      {
        name: 'Italy',
        value: 35800,
      },
    ];
    return budgetData;
    return this.budgetData;
  }
}
