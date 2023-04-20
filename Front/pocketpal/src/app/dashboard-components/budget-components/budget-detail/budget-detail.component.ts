import { Component, Input } from '@angular/core';
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
  public month: any;
  @Input() Budget : any;
  @Input() budgetIndex: number | any;

  constructor(
    private appService: AppserviceService,
  ) {}

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

  deleteExpense(expenseIndex: number){
    this.appService.deleteExpense(this.budgetIndex, expenseIndex).subscribe(
      (data)=>{
        
      }
      )
  }

}