import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  constructor(private http: HttpClient) {}

  userData: any;
  token = sessionStorage.getItem('auth_token')

  signUp(name: string, password: string, email: string) {
    let body = { name: name, password: password, email: email };
    console.log(body);
    return this.http.post('https://Pocket-pal-api.vercel.app/signup', body);
  }

  signIn(email: string, password: string) {

    let body = { email: email, password: password };
    console.log(body);
    return this.http.post('https://Pocket-pal-api.vercel.app/signin', body);
  }

  getProfile() {
    const header = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    return this.http.get('https://Pocket-pal-api.vercel.app/profile', {
      headers: header,
    });
  }


  editProfile( firstname: string, lastname: string, email: string, password: string) {
    const body = { firstname: firstname, lastname: lastname, email: email, password: password};
    const header = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
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
    const header = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    let body = { name: name, amount: amount, category: category };
    return this.http.post(
      `https://Pocket-pal-api.vercel.app,body/budgets/${month}/${year}/expenses`,
      { headers: header }
    );
  }

  getBudget( month: number, year: number, balance: string) {
    const header = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    let body = { month: month, year: year, balance: balance };
    return this.http.post('https://Pocket-pal-api.vercel.app/budgets', body, {
      headers: header,
    });
  }

  deleteExpense( budget_index: any, expense_index: any) {
    const header = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    return this.http.delete(
      `https://Pocket-pal-api.vercel.app/budget/${budget_index}/expenses/${expense_index}`,
      { headers: header }
    );
  }

  deletBudget( budget_index: any) {
    const header = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    return this.http.delete(
      `https://Pocket-pal-api.vercel.app/budget/${budget_index}`,
      { headers: header }
    );
  }

  getAIprompt(prompt: string) {
    return this.http.get(`https://Pocket-pal-api.vercel.app/${prompt}`);
  }
}
