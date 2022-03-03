import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editspopup-sto-no',
  templateUrl: './editspopup-sto-no.component.html',
  styleUrls: ['./editspopup-sto-no.component.scss']
})
export class EditspopupStoNoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditspopupStoNoComponent>,) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
  
}