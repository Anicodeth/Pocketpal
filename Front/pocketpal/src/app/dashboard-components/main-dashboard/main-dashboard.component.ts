import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppserviceService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  public profileData: any;

  public dataSource: any[];
  public totalBudgets: number = 10;
  public netIncome: number = 10;
  public displayedColumns: string[];

  constructor(
    private apiService: ApiService,
    private appService: AppserviceService
  ) {
    this.dataSource = this.apiService.getBudgetData();
    this.displayedColumns = ['name', 'category', 'amount'];
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

  get expenses() {
    let allExpenses: any[] = [];
    for (let i = 0; i < this.budgets.length; i++) {
      for (let j = 0; j < this.budgets[i].expenses.length; j++) {
        allExpenses.push({
          name: this.budgets[i].expenses[j].name,
          category: this.budgets[i].expenses[j].category,
          amount: this.budgets[i].expenses[j].amount,
        });
      }
    }
    return allExpenses;
  }

  get totalIncome() {
    let expense: number = 0;
    this.budgets.forEach((budget) => {
      expense += budget.balance;
    })

    return expense;
  }

  get totalExpenses() {
    let income: number = 0;
    this.expenses.forEach((expense) => {
      income += expense.amount;
    })

    return income;
  }

  get barChartData() {
    let data: any = [];

    this.expenses.forEach((expense) => {
      data.push({
        name: expense.name,
        value: expense.amount
      })
    });

    return data;
  }

  get lineChartData() {
    let i = 1;
    let data: any[] = [];

    this.budgets.forEach((budget) => {
      let expenseData: any[] = [];
      budget.expenses.forEach((expense: any) => {
        expenseData.push({
          name: expense.category,
          value: expense.amount
        })
      });

      data.push({
        name: `Budget ${i}`,
        series: expenseData,
      });
      i += 1;
    });

    return data;
  }

  viewIncomeDetails() {
    
  }

  viewExpenseDetails() {
    
  }

  viewBudgetDetails() {
    
  }
}