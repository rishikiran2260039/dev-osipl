import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addrfq-popup-servicecontracts',
  templateUrl: './addrfq-popup-servicecontracts.component.html',
  styleUrls: ['./addrfq-popup-servicecontracts.component.scss']
})
export class AddrfqPopupServicecontractsComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(public dialogRef: MatDialogRef<AddrfqPopupServicecontractsComponent>,private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any) { 
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
  taskData: any;
  alertService: any;
  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
}