import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContractsService {

  constructor(private http: Http) { 
  }
}
