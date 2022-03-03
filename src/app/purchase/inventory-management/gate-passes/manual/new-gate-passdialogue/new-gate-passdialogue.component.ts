import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-gate-passdialogue',
  templateUrl: './new-gate-passdialogue.component.html',
  styleUrls: ['./new-gate-passdialogue.component.scss']
})
export class NewGatePassdialogueComponent implements OnInit {

  constructor(public dialog : MatDialogRef< NewGatePassdialogueComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}