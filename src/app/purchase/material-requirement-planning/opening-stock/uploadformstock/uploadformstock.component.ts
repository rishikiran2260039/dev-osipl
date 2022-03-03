import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-uploadformstock',
  templateUrl: './uploadformstock.component.html',
  styleUrls: ['./uploadformstock.component.scss']
})
export class UploadformstockComponent implements OnInit {
  constructor(public dialog: MatDialogRef<UploadformstockComponent>) { }

  ngOnInit() {
  }
 
  close(){
    this.dialog.close()
  }
}
