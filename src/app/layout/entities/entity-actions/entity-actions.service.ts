import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntityActionsService {

  constructor(private http: Http) { 
  }

  getHierarchy(username): Observable<any> {
    return this.http.get('http://localhost:3000/api/assets/' + username).pipe(map(data => {
      //console.log(data)
      return data
    }))     
  }
  createAsset(modelname, modelInfo, publicKey, ownerKeyPair, ownerName, data){
    return this.http.post('http://localhost:3000/api/assets/create', {modelName:modelname, modelInfo: modelInfo, publicKey: publicKey, ownerKeyPair: ownerKeyPair, ownerName: ownerName, data: data}).subscribe(data => {
      return data
    })     
  }
  transferAsset(assetName, destPublicKey, data, destName, ownerPrivateKey){
    return this.http.post('http://localhost:3000/api/assets/transfer', {assetName: assetName, destPublicKey: destPublicKey, data: data, newEntityName: destName, ownerPrivateKey: ownerPrivateKey}).subscribe(data => {
      return data
    })     
  }

}
