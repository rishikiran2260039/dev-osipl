import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addnewrowdialog',
  templateUrl: './addnewrowdialog.component.html',
  styleUrls: ['./addnewrowdialog.component.scss']
})
export class AddnewrowdialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<AddnewrowdialogComponent >) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}