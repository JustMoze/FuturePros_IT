import { IPlate } from './../IPlate';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApicallService } from '../apicall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Plates } from '../plates';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  dataToShow = new Plates('', '');
  id: string = null;

  constructor(public http: HttpClient, private apiService: ApicallService, private router: Router, private location: Location, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllPlates();
    console.log('data to show in ng', this.dataToShow);
  }
  getAllPlates(){
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.apiService
    .getCarPlates()
    .subscribe((data:any) => {
      data.forEach(element => {
        if(element._id === this.id){
          const {number, owner} = element;
          this.dataToShow.number = number;
          this.dataToShow.owner = owner;
        }
      });
    });
  }
  onSubmit(){
    try {
      const {number, owner} = this.dataToShow;
      this.apiService.putPlate(number, owner, this.id);
      this.router.navigateByUrl('/Refresh', {skipLocationChange:true}).then(() => {
        this.router.navigate([``]);
      });
    } catch (error) {
      window.location.reload();
    }
  }
}
