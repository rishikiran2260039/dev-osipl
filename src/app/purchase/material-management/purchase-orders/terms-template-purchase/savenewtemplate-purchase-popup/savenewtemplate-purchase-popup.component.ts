import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-savenewtemplate-purchase-popup',
  templateUrl: './savenewtemplate-purchase-popup.component.html',
  styleUrls: ['./savenewtemplate-purchase-popup.component.scss']
})
export class SavenewtemplatePurchasePopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<SavenewtemplatePurchasePopupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}
