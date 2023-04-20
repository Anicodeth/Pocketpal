import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  public currentDisplay: string = 'main';

  constructor(
    private apiService: ApiService
  ) {
  }

  onSeeBudget() {
    this.currentDisplay = 'main';
  }

  onAddBudget() {
    this.currentDisplay = 'addBudget';
  }

  onAddIncome() {
    this.currentDisplay = 'addIncome';
  }

  onAddExpense() {
    this.currentDisplay = 'addExpense';
  }


}
