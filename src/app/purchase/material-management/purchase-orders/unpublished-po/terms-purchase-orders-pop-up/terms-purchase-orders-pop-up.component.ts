import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-terms-purchase-orders-pop-up',
  templateUrl: './terms-purchase-orders-pop-up.component.html',
  styleUrls: ['./terms-purchase-orders-pop-up.component.scss']
})
export class TermsPurchaseOrdersPopUpComponent implements OnInit {

 
constructor(public dialog:MatDialogRef<TermsPurchaseOrdersPopUpComponent>, 
  @Inject(MAT_DIALOG_DATA) public data: any) { }

ngOnInit() {
}

close(){
  this.dialog.close();
}

}









