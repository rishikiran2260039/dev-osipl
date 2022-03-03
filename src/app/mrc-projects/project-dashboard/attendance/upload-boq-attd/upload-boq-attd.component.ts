import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-upload-boq-attd',
  templateUrl: './upload-boq-attd.component.html',
  styleUrls: ['./upload-boq-attd.component.scss']
})
export class UploadBoqAttdComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<UploadBoqAttdComponent>) {}

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
