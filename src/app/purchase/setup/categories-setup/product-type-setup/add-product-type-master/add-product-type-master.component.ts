import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-product-type-master',
  templateUrl: './add-product-type-master.component.html',
  styleUrls: ['./add-product-type-master.component.scss']
})
export class AddProductTypeMasterComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddProductTypeMasterComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
