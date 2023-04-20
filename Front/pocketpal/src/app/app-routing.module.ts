import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BudgetDetailComponent } from './dashboard-components/budget-components/budget-detail/budget-detail.component';
import { AddExpenseComponent } from './dashboard-components/budget-components/add-expense/add-expense.component';

const routes: Routes = [
  {path: '', redirectTo: "Home", pathMatch: "full"},
  { path: 'Home', component: LandingPageComponent },
  { path: 'loginPage', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard', children: [
    {path: 'detail/:month', component: BudgetDetailComponent},
    {path: 'expenses/:month/:year', component: AddExpenseComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
