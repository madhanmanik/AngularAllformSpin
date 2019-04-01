import { Component, OnInit } from '@angular/core';
import { InteSpriService } from '../inte-spri.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inter-spring-boot',
  templateUrl: './inter-spring-boot.component.html',
  styleUrls: ['./inter-spring-boot.component.css']
})
export class InterSpringBootComponent implements OnInit {
  dta: any;
  refNo: any;
  TxnRefno: any;
  taxInvo:any;

  //forms
  registerForm: FormGroup;
  submitted = false;

  constructor(private service: InteSpriService, private formBuilder: FormBuilder , private spinner: NgxSpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.dataGet();
    }, 5000);

    
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
    
  }

  dataGet(){
    this.service.getUsers().subscribe(data => {
      this.dta = data;
      console.log("response1" ,this.dta);
      this.refNo= this.dta.txnRefNo;
    this.TxnRefno= this.dta.partnerTxnRefNo;
    this.taxInvo= this.dta.taxInvoiceNumber;
   console.log(this.refNo)
    });
    this.spinner.hide();
  }
  // convenience getter for easy access to form fields
  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }
 

}
