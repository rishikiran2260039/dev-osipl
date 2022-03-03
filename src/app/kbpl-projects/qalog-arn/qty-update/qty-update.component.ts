import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-qty-update',
  templateUrl: './qty-update.component.html',
  styleUrls: ['./qty-update.component.scss']
})
export class QtyUpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QtyUpdateComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
} 
}
 