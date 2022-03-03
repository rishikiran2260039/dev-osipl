import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-p-upload-boq',
  templateUrl: './p-upload-boq.component.html',
  styleUrls: ['./p-upload-boq.component.scss']
})
export class PUploadBoqComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  items=[
    {"fields":"Serial"},
    {"fields":"Category"},
    {"fields":"Description"},
    // {"fields":"Deviation"},

    {"fields":"Material Quantity"},
    {"fields":"Material Unit"},
    {"fields":"Material Rate"},

    // {"fields":"Labour Quantity"},
    // {"fields":"Labour Unit"},
    // {"fields":"Labour Rate"},
  ]
  items1=[
    {"fields":"Civil"},
    {"fields":"Mechanical"},
    {"fields":"Electrical"},
    {"fields":"Plumbing"},
   
  ]

  
  items2=[
    {"serial":"1.1","category":"Electrical","description":"Air Conditionar Blowner","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"2.1","category":"Mechanical","description":"Benches for guests","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"3.1","category":"Civil","description":"Slab Work","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"4.1","category":"Plumbing","description":"Water Pipe","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"1.2","category":"Electrical","description":"Cooler","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"2.2","category":"Electrical","description":"Air Conditionar Blowner","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"3.3","category":"Mechanical","description":"Benches for guests","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"4.4","category":"Civil","description":"Slab Work","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"1.1.2","category":"Plumbing","description":"Water Pipe","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"2.2.2","category":"Electrical","description":"Cooler","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"3.2.2","category":"Electrical","description":"Air Conditionar Blowner","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"4.2.2","category":"Mechanical","description":"Benches for guests","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"1.3.1","category":"Civil","description":"Slab Work","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"2.3.1","category":"Plumbing","description":"Water Pipe","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"3.4","category":"Electrical","description":"Cooler","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"2.4.1","category":"Electrical","description":"Air Conditionar Blowner","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"4.1.3","category":"Mechanical","description":"Benches for guests","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"3.5","category":"Civil","description":"Slab Work","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"4.3","category":"Plumbing","description":"Water Pipe","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},
    {"serial":"4.6","category":"Electrical","description":"Cooler","unit":"Qtls","qty":"670","rate":"$60","active":"Yes","billed":"550","paid":"456","process":"12 ","pending":"94"},

  ]


  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<PUploadBoqComponent>,@Inject(MAT_DIALOG_DATA) public project: any,) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  close(): void {
    this.dialogRef.close();
  }

}
