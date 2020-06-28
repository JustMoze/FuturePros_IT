import { Plates } from './plates';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
