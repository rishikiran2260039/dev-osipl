import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-arnpopup',
  templateUrl: './arnpopup.component.html',
  styleUrls: ['./arnpopup.component.scss']
})
export class ArnpopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ArnpopupComponent>) { 
    
  }

  ngOnInit() {
  }

    close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
}
