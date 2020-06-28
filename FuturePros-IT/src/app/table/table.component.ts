import { Plates } from './../plates';
import { ApicallService } from './../apicall.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'number', 'owner', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Plates>();

  readonly ROOT_URL = 'http://localhost:3700/api/';
  

  constructor(public http: HttpClient, private apiService: ApicallService) {}
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getCarPlateList();
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  getCarPlateList() {
    this.apiService
    .getCarPlates()
    .subscribe((data:any) => {
      this.dataSource = new MatTableDataSource<Plates>(data)
    });
  }

}

