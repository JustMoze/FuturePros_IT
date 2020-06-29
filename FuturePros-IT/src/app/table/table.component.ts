import { Plates } from './../plates';
import { ApicallService } from './../apicall.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'number', 'owner', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Plates>();
  subscription: Subscription;
  browserRefresh: boolean = false;
  IdToDelete: string = null;
  showSnackbar: boolean = false;

  readonly ROOT_URL = 'http://localhost:3700/api/';
  

  constructor(public http: HttpClient, private apiService: ApicallService, private router: Router, private location: Location) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        setTimeout(() => this.dataSource.paginator = this.paginator);
      }
  });
  }
  
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

  handleDelete(id){
    this.IdToDelete = id;
    this.showSnackbar = true;
  }
  confirmDelete(){
    this.apiService.deletePlate(this.IdToDelete);
    this.IdToDelete = null;
    this.showSnackbar = false;
    this.router.navigateByUrl('/Refresh', {skipLocationChange:true}).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    })
  }
  handleEdit(id){
    this.router.navigate(['/Plates', id]);
  }
  cancelDelete(){
    this.showSnackbar = false;
  }

}
