import { Component, OnInit } from '@angular/core';
import { InteServiceService } from '../inte-service.service';

@Component({
  selector: 'app-int-spring-co',
  templateUrl: './int-spring-co.component.html',
  styleUrls: ['./int-spring-co.component.css']
})
export class IntSpringCoComponent implements OnInit {

  constructor(private inteServiceService:InteServiceService ) { 
    this.fetchUsers = this.fetchUsers.bind(this);
  }
  data1 :any;
  empList: any = [];
  refNo :any;
  TxnRefno: any;
  taxInvo:any;
  display = false;


  ngOnInit() {
    this.display = true;
    setTimeout(this.fetchUsers, 5000);
    //this.fetchUsers();
  }

  fetchUsers(){
    this.inteServiceService.getUsers().subscribe(data =>{
      this.data1 =data
      for(let employee of this.data1){
        this.empList.push(employee);
      }
      console.log('empList', this.empList)
      this.display = false;
    }
      );
  }

}