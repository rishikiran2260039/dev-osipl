import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-griddialog',
  templateUrl: './griddialog.component.html',
  styleUrls: ['./griddialog.component.scss']
})
export class GriddialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GriddialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
