import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { from } from 'rxjs';

import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: Http) { }

  getOwner(username): Observable<any> { 
    return this.http.get('http://localhost:3000/owner/' + username).pipe(map(data => {
      return data
    }))     
  }

}
