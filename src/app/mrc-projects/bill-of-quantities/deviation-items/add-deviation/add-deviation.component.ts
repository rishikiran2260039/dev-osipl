import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-deviation',
  templateUrl: './add-deviation.component.html',
  styleUrls: ['./add-deviation.component.scss']
})
export class AddDeviationComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddDeviationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
