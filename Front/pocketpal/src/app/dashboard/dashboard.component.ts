import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { AppserviceService } from '../appservice.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dataSource: MatTableDataSource<any> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  components = [ "My Dashboard", "Reports", "Financial Data", "Financial Assistant AI", "Profile and Settings" ]
  currentlyOnDisplay = 0;

  constructor(
    private appService: AppserviceService,
    private rounterService: Router
    ) {
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

  logOut() {
    
    sessionStorage.setItem('jwt', "");
    this.rounterService.navigateByUrl("/Home");
  }
  

}
