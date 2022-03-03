import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editquotationspopup-servicecontracts',
  templateUrl: './editquotationspopup-servicecontracts.component.html',
  styleUrls: ['./editquotationspopup-servicecontracts.component.scss']
})
export class EditquotationspopupServicecontractsComponent implements OnInit {

  constructor(public dialog : MatDialogRef<EditquotationspopupServicecontractsComponent>,) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}