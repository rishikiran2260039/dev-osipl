import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-foreclose-dialog',
  templateUrl: './foreclose-dialog.component.html',
  styleUrls: ['./foreclose-dialog.component.scss']
})
export class ForecloseDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ForecloseDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close()
  }

}
