import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  public dataSource: any;
  public displayedColumns: string[] = ['name', 'values'];
  public totalIncome: number = 10;
  public totalExpenses: number = 10;
  public totalBudgets: number = 10;
  public netIncome: number = 10;

  constructor(
    private apiService: ApiService
  ) {
    this.dataSource = this.apiService.getBudgetData();
  }

  viewIncomeDetails() {
    
  }

  viewExpenseDetails() {
    
  }

  viewBudgetDetails() {
    
  }
}
