import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class pAddCategoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<pAddCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  @Input() childedit:boolean;

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
