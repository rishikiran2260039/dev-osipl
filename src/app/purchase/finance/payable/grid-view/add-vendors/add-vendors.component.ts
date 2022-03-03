import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-vendors',
  templateUrl: './add-vendors.component.html',
  styleUrls: ['./add-vendors.component.scss']
})
export class AddVendorsComponent implements OnInit {
  Types: string[] = ['PO', 'WO', 'Rental'];
  refType:string;
  constructor(public dialogRef: MatDialogRef<AddVendorsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

  changeRef(event){
    console.log(event.value,'Event')
    this.refType = event.value
  }
}
