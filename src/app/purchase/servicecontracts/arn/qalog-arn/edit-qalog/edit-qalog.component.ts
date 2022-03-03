import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-qalog',
  templateUrl: './edit-qalog.component.html',
  styleUrls: ['./edit-qalog.component.scss']
})
export class EditQalogComponent implements OnInit {

  constructor(public dialog:MatDialogRef<EditQalogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }
}
