    import { Injectable } from '@angular/core';
    import { Http, Headers, Response } from '@angular/http';
    import { HttpModule } from '@angular/http';
    import { Observable } from 'rxjs';
    import { from } from 'rxjs';
    import { map, filter, catchError, mergeMap } from 'rxjs/operators';

    @Injectable({
      providedIn: 'root'
    })
    export class OwnersService {

      constructor(private http: Http) { 
      }

      getOwner(username): Observable<any> {
        return this.http.get('http://localhost:3000/api/owners/' + username).pipe(map(data => {
          return data
        }))     
      }

      createOwner(username, model): Observable<any> { // actualizar
        return this.http.post('http://localhost:3000/api/owners/' + username, model).pipe(map(data => {
          return data
        }))     
      }

      deleteOwner(privateKey){
        return this.http.delete('http://localhost:3000/api/owners/' + privateKey).pipe(map(data => {
          return data
        }))     
      }

    }
