import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: Http) { 
  }

  getData(modelName, dataname, field, assetPublicKey): Observable<any> {

    return this.http.post('http://localhost:3000/api/assets/data/' + dataname, {field: field, assetPublicKey: assetPublicKey, modelName: modelName}).pipe(map(data => {
      return data
    }))      
  }

  getAllData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/assets/data/all').pipe(map(data => {
      return data
    }))      
  }

  getTemperature(): Observable<any> {
    return this.http.get('http://localhost:3001/api/v1/data/12345').pipe(map(data => {
      return data
    }))      
  }
}
