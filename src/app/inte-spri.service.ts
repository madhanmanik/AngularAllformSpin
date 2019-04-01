import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteSpriService {

  private userUrl = 'http://172.23.201.169:8082/bank/txn?xrNo=dfkdkf';
  
  constructor(private http: HttpClient) {}

  getUsers() {
    console.log(this.userUrl);
    return this.http.get(this.userUrl);
    
  }

}
