import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-itempopup',
  templateUrl: './add-itempopup.component.html',
  styleUrls: ['./add-itempopup.component.scss']
})
export class AddItempopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddItempopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
