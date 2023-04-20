import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { AppserviceService } from '../services/appservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profileData: any;
  expenses: any;

  dataSource: MatTableDataSource<any> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  components = [ "My Dashboard", "Reports", "Financial Data", "Financial Assistant AI", "Profile and Settings" ]
  currentlyOnDisplay = 0;

  constructor(
    private dataService: DataService,
    private appService: AppserviceService
    ) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataService.getData());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.appService.getProfile().
    subscribe((response) => {
      this.profileData = response;
    });
  }
  
  get budgets(): any[] {
    let allBudgets: any[] = [];
    for (let i = 0; i < this.profileData.budgets.length; i++) {
      allBudgets.push(this.profileData.budgets[i]);
    }

    return allBudgets;
  }
  
  showDashboard() {
    this.currentlyOnDisplay = 0;
  }

  showReports() {
    this.currentlyOnDisplay = 1;
  }

  showAi() {
    this.currentlyOnDisplay = 3;
  }

  showLinks() {
    this.currentlyOnDisplay = 2;
  }

  showProfile() {
    this.currentlyOnDisplay = 4;
  }
  

}
