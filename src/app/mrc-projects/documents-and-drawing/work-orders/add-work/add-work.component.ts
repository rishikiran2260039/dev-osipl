import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.scss']
})
export class AddWorkComponent implements OnInit {

   
  constructor(public dialogRef: MatDialogRef<AddWorkComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}