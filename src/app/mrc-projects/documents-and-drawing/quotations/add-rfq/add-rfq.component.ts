import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-rfq',
  templateUrl: './add-rfq.component.html',
  styleUrls: ['./add-rfq.component.scss']
})
export class AddRfqComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  items=[
    {"is_checked":"1","serial":"3.1","category":"Electrical","description":"Air Conditionar Blowner","unit":"Qtls","qty":"170","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$10,200"},
    {"is_checked":"1","serial":"4.1","category":"Mechanical","description":"Benches for guests","unit":"Qtls","qty":"100","rate":"$70","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$7000"},
    {"is_checked":"1","serial":"5.1","category":"Civil","description":"Slab Work","unit":"Qtls","qty":"130","rate":"$40","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$5200"},
    {"is_checked":"0","serial":"6.1","category":"Plumbing","description":"Water Pipe","unit":"Qtls","qty":"170","rate":"$80","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$13,600"},
    {"is_checked":"0","serial":"3.2","category":"Electrical","description":"Cooler","unit":"Qtls","qty":"70","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$4200"},
    {"is_checked":"1","serial":"4.2","category":"Electrical","description":"Air Conditionar Blowner","unit":"Qtls","qty":"170","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$10,200"},
    {"is_checked":"0","serial":"5.2","category":"Mechanical","description":"Benches for guests","unit":"Pcs","qty":"100","rate":"$70","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$7000"},
    {"is_checked":"0","serial":"6.2","category":"Civil","description":"Slab Work","unit":"Pcs","qty":"130","rate":"$40","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$5200"},
    {"is_checked":"1","serial":"3.1.2","category":"Plumbing","description":"Water Pipe","unit":"Pcs","qty":"170","rate":"$80","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$13,600"},
    {"is_checked":"0","serial":"3.5","category":"Electrical","description":"Cooler","unit":"Pcs","qty":"70","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94","amount":"$4200"},

  ]

  constructor(public dialogRef: MatDialogRef<AddRfqComponent>,private _formBuilder: FormBuilder) { 
    
   }

  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }

}
