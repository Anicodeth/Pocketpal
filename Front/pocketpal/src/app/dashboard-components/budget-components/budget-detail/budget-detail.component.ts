import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AppserviceService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent {
  public profileData: any;
  public budgetData: string;
  public month: any;
  public Budget : any;
  constructor(
    private apiService: ApiService,
    private appService: AppserviceService,
    private route : ActivatedRoute
  ) {
    this.budgetData = this.apiService.getBudgetData();
  }
  
  ngOnInit(): void {
    this.appService.getProfile().
    subscribe((response) => {
      this.profileData = response;
    });

    this.route.paramMap.subscribe(params => {
      this.month = params.get('month');
      // Use the id parameter here
    });
  }

  ngOnChanges(){
    this.profileData.budgets.forEach((budget:any) => {
      if (budget.month == this.month){
        this.Budget = budget;
      }
    })
  }

  getPieChartData() {
    let data: any = [];

    this.Budget.expenses.forEach((expense: any) => {
      data.push({
        name: expense.name,
        value: expense.amount
      })
    });

    return data;
  }

  deleteExpense(budegeIndex: number, expenseIndex: number){
    this.appService.deleteExpense(budegeIndex, expenseIndex)
  }


}
