import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-category-attd',
  templateUrl: './add-category-attd.component.html',
  styleUrls: ['./add-category-attd.component.scss']
})
export class AddCategoryAttdComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCategoryAttdComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  @Input() childedit:boolean;

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
