import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HierarchyService {

  constructor(private http: Http) { 
  }

  getHierarchy(username): Observable<any> {
    return this.http.get('http://localhost:3000/api/assets/' + username).pipe(map(data => {
      //console.log(data)
      return data
    }))     
  }
}
