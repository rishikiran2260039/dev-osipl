import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddIndentComponent } from '../../../project-servicecontracts/projectservice-indents/add-indent/add-indent.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddIndentComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
