import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-grid-colom-rq',
  templateUrl: './grid-colom-rq.component.html',
  styleUrls: ['./grid-colom-rq.component.scss']
})
export class GridColomRqComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridColomRqComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
