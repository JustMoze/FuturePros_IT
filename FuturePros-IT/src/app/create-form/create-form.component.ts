import { Router } from '@angular/router';
import { ApicallService } from './../apicall.service';
import { HttpClient } from '@angular/common/http';
import { Plates } from './../plates';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  data = new Plates('', '');
  constructor(public http: HttpClient, private apiService: ApicallService, private router: Router) { }

  ngOnInit(): void {
  }
  log(name){
    console.log('name -> ', name)
  }
  onSubmit(){
    try {
      
      this.apiService.addPlate(this.data.number, this.data.owner);
      this.router.navigate([``]);
    } catch (error) {
      window.location.reload();
    }

  }

}
