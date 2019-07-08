import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { from } from 'rxjs';

import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: Http) { }

  checkSupernode(username): Observable<any> { 
      return this.http.get('http://localhost:3000/api/supernode/status/' + username).pipe(map(data => {
        return data
      }))     
  }

  createSupernode(username): Observable<any> { 
    return this.http.post('http://localhost:3000/api/supernode/create/' + username, {}).pipe(map(data => {
      return data
    }))     
  }

  startSupernode(username): Observable<any> { 
    return this.http.post('http://localhost:3000/api/supernode/start/' + username, {}).pipe(map(data => {
      return data
    }))     
  }

  stopSupernode(username): Observable<any> { 
    return this.http.post('http://localhost:3000/api/supernode/stop/' + username, {}).pipe(map(data => {
      return data
    }))     
  }

  deleteSupernode(username): Observable<any> { 
    return this.http.delete('http://localhost:3000/api/supernode/' + username).pipe(map(data => {
      return data
    }))     
  }
}
