    import { Injectable } from '@angular/core';
    import { Http, Headers, Response } from '@angular/http';
    import { Observable } from 'rxjs';
    import { map } from 'rxjs/operators';

    @Injectable({
      providedIn: 'root'
    })
    export class LoginService {

      constructor(private http: Http) { 
      }

      onLoggedin(model): Observable<any> { // actualizar
        return this.http.post('http://localhost:3000/api/owners/',{username: model.username,password: model.password}).pipe(map(data => {
          return data
        }))     
      }

    }
