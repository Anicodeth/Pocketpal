import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date'];
  dataSource: MatTableDataSource<any> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  showDashboardFlag = true;
  showReportsFlag = false;
  showSettingsFlag = false;

  constructor(
    private dataService: DataService
    ) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataService.getData());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  showDashboard() {
    this.showDashboardFlag = true;
    this.showReportsFlag = false;
    this.showSettingsFlag = false;
  }

  showReports() {
    this.showDashboardFlag = false;
    this.showReportsFlag = true;
    this.showSettingsFlag = false;
  }

  showSettings() {
    this.showDashboardFlag = false;
    this.showReportsFlag = false;
    this.showSettingsFlag = true;
  }
  

}
