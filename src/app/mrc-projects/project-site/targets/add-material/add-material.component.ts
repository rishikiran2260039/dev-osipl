import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {

     
  constructor(public dialogRef: MatDialogRef<AddMaterialComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}