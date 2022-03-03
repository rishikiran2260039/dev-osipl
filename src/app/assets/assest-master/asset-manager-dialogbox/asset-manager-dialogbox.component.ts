import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';  

@Component({
  selector: 'app-asset-manager-dialogbox',
  templateUrl: './asset-manager-dialogbox.component.html',
  styleUrls: ['./asset-manager-dialogbox.component.scss']
})
export class AssetManagerDialogboxComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AssetManagerDialogboxComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
