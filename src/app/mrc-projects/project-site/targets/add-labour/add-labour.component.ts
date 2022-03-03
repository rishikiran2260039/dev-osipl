import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-labour',
  templateUrl: './add-labour.component.html',
  styleUrls: ['./add-labour.component.scss']
})
export class AddLabourComponent implements OnInit {

     
  constructor(public dialogRef: MatDialogRef<AddLabourComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}