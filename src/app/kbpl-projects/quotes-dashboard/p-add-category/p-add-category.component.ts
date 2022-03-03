import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-p-add-category',
  templateUrl: './p-add-category.component.html',
  styleUrls: ['./p-add-category.component.scss']
})
export class PAddCategoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PAddCategoryComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  @Input() childedit:boolean;

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
