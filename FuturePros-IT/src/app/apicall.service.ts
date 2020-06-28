import { Plates } from './plates';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  readonly ROOT_URL = 'http://localhost:3700/api/plates';
  constructor(private httpClient: HttpClient) { }
  getCarPlates() {
    return this.httpClient.get(this.ROOT_URL).
        pipe(
           map((data: Plates[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
  }

  addPlate(number, owner){
    return this.httpClient.post(this.ROOT_URL, {
      'number': number,
      'owner': owner
    }).subscribe(
      val => {
        console.log("POST request was successful. Value added -> ", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      }
    );
  }
  deletePlate(id){
    return this.httpClient.delete(`${this.ROOT_URL}/${id}`)
      .subscribe(
        val => {
          console.log("DELETE request was successful. Value was deleted -> ", val);
        },
        response => {
          console.log("DELETE call in error", response);
        },
        () => {
          console.log("The DELETE observable is now completed.");
        }
      );
  }
  putPlate(number, owner, id){
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    return this.httpClient.put(`${this.ROOT_URL}/${id}`, {
      'number': number,
      'owner': owner
    }, {headers})
      .subscribe(
        val => {
          console.log("PUT request was successful. Value was updated", val);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
      )
  }
}
