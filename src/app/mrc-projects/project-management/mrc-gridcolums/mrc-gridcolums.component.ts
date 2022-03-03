import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-mrc-gridcolums',
  templateUrl: './mrc-gridcolums.component.html',
  styleUrls: ['./mrc-gridcolums.component.scss']
})
export class MrcGridcolumsComponent implements OnInit {

  
  gridColumnForm: FormGroup;
  
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<MrcGridcolumsComponent>) { 
    this.createGridColumnGroup();
  }


  ngOnInit() {
  
  }
  
  createGridColumnGroup() {
  
  }
  close(): void {
    this.dialogRef.close();
  }

  saveGridColumns() {
    this.dialogRef.close();
  }
}

