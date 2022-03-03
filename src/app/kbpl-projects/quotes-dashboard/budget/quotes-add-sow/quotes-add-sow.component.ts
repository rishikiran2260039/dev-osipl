import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quotes-add-sow',
  templateUrl: './quotes-add-sow.component.html',
  styleUrls: ['./quotes-add-sow.component.scss']
})
export class QuotesAddSowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuotesAddSowComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
