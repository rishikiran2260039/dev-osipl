import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ordergrid',
  templateUrl: './ordergrid.component.html',
  styleUrls: ['./ordergrid.component.scss']
})
export class OrdergridComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<OrdergridComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
