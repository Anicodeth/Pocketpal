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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dataService.getData());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
