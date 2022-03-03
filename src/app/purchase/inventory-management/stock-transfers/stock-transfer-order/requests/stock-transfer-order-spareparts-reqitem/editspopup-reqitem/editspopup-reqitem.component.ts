import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editspopup-reqitem',
  templateUrl: './editspopup-reqitem.component.html',
  styleUrls: ['./editspopup-reqitem.component.scss']
})
export class EditspopupReqitemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditspopupReqitemComponent>,) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
  
}