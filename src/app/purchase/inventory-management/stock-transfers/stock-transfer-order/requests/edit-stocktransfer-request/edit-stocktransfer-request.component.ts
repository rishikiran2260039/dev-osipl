import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-stocktransfer-request',
  templateUrl: './edit-stocktransfer-request.component.html',
  styleUrls: ['./edit-stocktransfer-request.component.scss']
})
export class EditStocktransferRequestComponent implements OnInit {

  constructor(public dialog : MatDialogRef<EditStocktransferRequestComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialog.close();
  }

}