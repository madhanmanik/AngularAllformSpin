import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteServiceService {

private url = 'http://172.23.201.169:8081/test/test1?xrNo=manik';

  constructor(private http: HttpClient) { }

  getUsers()
  {
    console.log("url" ,this.url);
    return this.http.get(this.url);
  }
}
