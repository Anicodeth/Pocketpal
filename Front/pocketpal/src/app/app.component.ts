import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pocketpal';

  transactions = [
    { id: 1, date: '2023-04-15', amount: 100 },
    { id: 2, date: '2023-04-16', amount: 200 },
    { id: 3, date: '2023-04-17', amount: 300 }
  ];

  transactionColumns = ['id', 'date', 'amount'];
}
