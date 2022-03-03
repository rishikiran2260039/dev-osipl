import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-line-item-dialog',
  templateUrl: './line-item-dialog.component.html',
  styleUrls: ['./line-item-dialog.component.scss']
})
export class LineItemDialogComponent implements OnInit {

  constructor(public matdial : MatDialogRef<LineItemDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.matdial.close();
  }
}
