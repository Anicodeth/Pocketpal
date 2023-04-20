import { Component,Input  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from 'src/app/services/appservice.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent {
  public budgetForm: FormGroup;

  constructor(private service: AppserviceService, private fb: FormBuilder) {
    this.budgetForm = this.fb.group({
      month: ['', Validators.required],
      year: ['', Validators.required],
      balance: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.addBudget(this.budgetForm.value.month, this.budgetForm.value.year, this.budgetForm.value.balance).subscribe(
      (data)=>{
        console.log(data)
      },(err)=>{
        console.log(err)
      }
    )
  }
}
