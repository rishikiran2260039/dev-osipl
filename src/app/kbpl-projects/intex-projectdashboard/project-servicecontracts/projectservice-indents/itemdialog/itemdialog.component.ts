import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-itemdialog',
  templateUrl: './itemdialog.component.html',
  styleUrls: ['./itemdialog.component.scss']
})
export class ItemdialogComponent implements OnInit {
  constructor(public dialog : MatDialogRef<ItemdialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
