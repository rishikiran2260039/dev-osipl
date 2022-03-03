import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-rfqform',
  templateUrl: './purchase-rfqform.component.html',
  styleUrls: ['./purchase-rfqform.component.scss']
})
export class PurchaseRFQFormComponent implements OnInit {
  
  userForm: FormGroup;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  

  submit(){
    
  }
}
