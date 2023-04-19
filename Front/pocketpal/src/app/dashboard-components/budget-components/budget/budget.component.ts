import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  public budgetData: string;

  constructor(
    private apiService: ApiService
  ) {
    this.budgetData = this.apiService.getBudgetData();
  }

  onAddBudget() {
  }

  onAddIncome() {
  }

  onAddExpense() {
  }


}
