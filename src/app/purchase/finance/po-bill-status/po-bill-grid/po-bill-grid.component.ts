import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-po-bill-grid',
  templateUrl: './po-bill-grid.component.html',
  styleUrls: ['./po-bill-grid.component.scss']
})
export class PoBillGridComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<PoBillGridComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
