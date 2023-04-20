import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppserviceService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit{
  public expenseForm: FormGroup;
  public month: any;
  public year: any;

  constructor(private service: AppserviceService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.expenseForm = this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.month = params.get('month');
      this.year = params.get('year');
      // Use the id parameter here
    });
  }

  addExpense(){
    this.service.expenses(this.month,this.year, this.expenseForm.value.name, this.expenseForm.value.amount, this.expenseForm.value.category)
  }
  

}
