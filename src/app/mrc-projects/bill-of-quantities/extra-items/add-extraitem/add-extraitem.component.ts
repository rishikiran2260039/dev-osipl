import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-extraitem',
  templateUrl: './add-extraitem.component.html',
  styleUrls: ['./add-extraitem.component.scss']
})
export class AddExtraitemComponent implements OnInit {

   
  constructor(public dialogRef: MatDialogRef<AddExtraitemComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}