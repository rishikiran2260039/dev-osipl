import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-editquotationspopup-qutotations',
  templateUrl: './editquotationspopup-qutotations.component.html',
  styleUrls: ['./editquotationspopup-qutotations.component.scss']
})
export class EditquotationspopupQutotationsComponent implements OnInit {

  
  constructor(public dialog : MatDialogRef<EditquotationspopupQutotationsComponent>,) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}