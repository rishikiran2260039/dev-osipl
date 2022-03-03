import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-update-sow',
  templateUrl: './update-sow.component.html',
  styleUrls: ['./update-sow.component.scss']
})
export class UpdateSowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateSowComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
