import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './services/data.service';

import { TableComponent } from './dashboard-components/partials/table/table.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AIpageComponent } from './aipage/aipage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ChatService } from './services/chat.service';
import { ChatComponent } from './dashboard-components/chat/chat.component';
import { LineChartComponent } from './dashboard-components/partials/line-chart/line-chart.component';
import { BarChartComponent } from './dashboard-components/partials/bar-chart/bar-chart.component';
import { PieChartComponent } from './dashboard-components/partials/pie-chart/pie-chart.component';

import { BudgetComponent } from './dashboard-components/budget-components/budget/budget.component';
import { AddBudgetComponent } from './dashboard-components/budget-components/add-budget/add-budget.component';
import { AddIncomeComponent } from './dashboard-components/budget-components/add-income/add-income.component';
import { AddExpenseComponent } from './dashboard-components/budget-components/add-expense/add-expense.component';
import { ApiService } from './services/api.service';
import { AiService } from './services/ai.service';
import { MainDashboardComponent } from './dashboard-components/main-dashboard/main-dashboard.component';
import { AppserviceService } from './services/appservice.service';
import { LiteracyLinksComponent } from './dashboard-components/literacy-links/literacy-links.component';
import { BudgetDetailComponent } from './dashboard-components/budget-components/budget-detail/budget-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    LoginPageComponent,
    SignupPageComponent,
    AIpageComponent,
    LandingPageComponent,
    ProfileComponent,
    ChatComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    BudgetComponent,
    AddBudgetComponent,
    AddIncomeComponent,
    AddExpenseComponent,
    MainDashboardComponent,
    LiteracyLinksComponent,
    BudgetDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    ReactiveFormsModule,
    NgxChartsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [
    DataService,
    ChatService,
    ApiService,
    AiService,
  ],
  bootstrap: [
    AppComponent,
    ReactiveFormsModule,
  ],

})
export class AppModule {}
