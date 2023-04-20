import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  constructor(private http: HttpClient) {}

  public profileData: any;
  public userData: any;
  private jwt = sessionStorage.getItem('jwt');

  refreshToken() {
    this.jwt = sessionStorage.getItem('jwt');
  }

  signUp(name: string, email: string, password: string) {
    let body = { name: name, password: password, email: email };
    return this.http.post('https://Pocket-pal-api.vercel.app/signup', body);
  }

  signIn(email: string, password: string) {

    let body = { email: email, password: password };
    return this.http.post('https://Pocket-pal-api.vercel.app/signin', body);
  }

  getProfile(): Observable<any> {
    this.refreshToken();
    const header = new HttpHeaders({ Authorization: `Bearer ${this.jwt}` });

    return this.http.get('https://Pocket-pal-api.vercel.app/profile', { headers: header }); 
  }


  editProfile( firstname: string, lastname: string, email: string, password: string) {
    this.refreshToken();

    const body = { firstname: firstname, lastname: lastname, email: email, password: password};
    const header = new HttpHeaders({ Authorization: `Bearer ${this.jwt}` });
    return this.http.put('https://Pocket-pal-api.vercel.app/profile', body, {
      headers: header,
    });
  }

  expenses(
    month: any,
    year: any,
    name: string,
    amount: number,
    category: string
  ) {
    this.refreshToken();

    const header = new HttpHeaders({ Authorization: `Bearer ${this.jwt}` });
    let body = { name: name, amount: amount, category: category };
    return this.http.post(
      `https://Pocket-pal-api.vercel.app,body/budgets/${month}/${year}/expenses`,
      { headers: header }
    );
  }

  getBudget( month: number, year: number, balance: string) {
    this.refreshToken();

    const header = new HttpHeaders({ Authorization: `Bearer ${this.jwt}` });
    let body = { month: month, year: year, balance: balance };
    return this.http.post('https://Pocket-pal-api.vercel.app/budgets', body, {
      headers: header,
    });
  }

  deleteExpense( budget_index: any, expense_index: any) {
    this.refreshToken();

    const header = new HttpHeaders({ Authorization: `Bearer ${this.jwt}` });
    return this.http.delete(
      `https://Pocket-pal-api.vercel.app/budget/${budget_index}/expenses/${expense_index}`,
      { headers: header }
    );
  }

  deletBudget( budget_index: any) {
    this.refreshToken();

    const header = new HttpHeaders({ Authorization: `Bearer ${this.jwt}` });
    return this.http.delete(
      `https://Pocket-pal-api.vercel.app/budget/${budget_index}`,
      { headers: header }
    );
  }

  getAIprompt(prompt: string) {
    this.refreshToken();

    return this.http.get(`https://Pocket-pal-api.vercel.app/${prompt}`);
  }
}