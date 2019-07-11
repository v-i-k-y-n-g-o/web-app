    import { Injectable } from '@angular/core';
    import { Http, Headers, Response } from '@angular/http';
    import { HttpModule } from '@angular/http';
    import { Observable } from 'rxjs';
    import { from } from 'rxjs';
    import { map, filter, catchError, mergeMap } from 'rxjs/operators';

    @Injectable({
      providedIn: 'root'
    })
    export class ChartsService {

      constructor(private http: Http) {
      }


      getData(authorization): Observable<any> { // actualizar
        let headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': authorization });
        var options = { headers: headers }; 
        return this.http.get('http://localhost:3000/api/v1/data', options).pipe(map(data => {
          return data
        }))     
      }

    }
