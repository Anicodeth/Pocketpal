import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppserviceService } from 'src/app/services/appservice.service'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  public budgetData: string;
  public currentDisplay: string = 'main';
  public profileData: any;

  constructor(
    private apiService: ApiService,
    private appService: AppserviceService
  ) {
    this.budgetData = this.apiService.getBudgetData();
  }
  
  ngOnInit(): void {
    this.appService.getProfile().
    subscribe((response) => {
      this.profileData = response;
    });
  }

  get budgets() {
    let allBudgets: any[] = [];
    for (let i = 0; i < this.profileData.budgets.length; i++) {
      allBudgets.push(this.profileData.budgets[i]);
    }

    return allBudgets;
  }

  getPieChartData(i: number) {
    let data: any = [];

    this.budgets[i].expenses.forEach((expense: any) => {
      data.push({
        name: expense.name,
        value: expense.amount
      })
    });

    return data;
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
