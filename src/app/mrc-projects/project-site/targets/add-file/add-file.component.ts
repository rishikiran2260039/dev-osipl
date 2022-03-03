import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss']
})
export class AddFileComponent implements OnInit {

     
  constructor(public dialogRef: MatDialogRef<AddFileComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}