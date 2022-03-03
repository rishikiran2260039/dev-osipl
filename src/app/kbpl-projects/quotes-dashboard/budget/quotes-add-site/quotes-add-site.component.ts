import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quotes-add-site',
  templateUrl: './quotes-add-site.component.html',
  styleUrls: ['./quotes-add-site.component.scss']
})
export class QuotesAddSiteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<QuotesAddSiteComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }
}
