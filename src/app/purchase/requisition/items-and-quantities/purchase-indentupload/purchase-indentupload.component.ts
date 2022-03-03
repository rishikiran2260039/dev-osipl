import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-purchase-indentupload',
  templateUrl: './purchase-indentupload.component.html',
  styleUrls: ['./purchase-indentupload.component.scss']
})
export class PurchaseIndentuploadComponent implements OnInit {

  constructor(public dialog: MatDialogRef<PurchaseIndentuploadComponent>) { }

  ngOnInit() {
  }
 
  close(){
    this.dialog.close()
  }
}
