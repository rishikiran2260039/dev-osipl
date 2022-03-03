import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-new-item-dialog-servicecontracts',
  templateUrl: './add-new-item-dialog-servicecontracts.component.html',
  styleUrls: ['./add-new-item-dialog-servicecontracts.component.scss']
})
export class AddNewItemDialogServicecontractsComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddNewItemDialogServicecontractsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }
}