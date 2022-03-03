import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SurplusstockdialogComponent } from '../surplusstockdialog/surplusstockdialog.component';
import { TotalstockqtydialogComponent } from '../totalstockqtydialog/totalstockqtydialog.component';
import { EditspopupReqitemComponent } from './editspopup-reqitem/editspopup-reqitem.component';

@Component({
  selector: 'app-stock-transfer-order-spareparts-reqitem',
  templateUrl: './stock-transfer-order-spareparts-reqitem.component.html',
  styleUrls: ['./stock-transfer-order-spareparts-reqitem.component.scss']
})
export class StockTransferOrderSparepartsReqitemComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  filterToggle = false;
  ngOnInit() {
  }
 
  items = [
    { slno: "1", itemno: "EAS10005", itemname: "ALTARNATOR", totalstockqty: "25", surplusstockqty: "25", requiredqty: "10"},
    { slno: "2", itemno: "EAS10002", itemname: "A/C FITER", totalstockqty: "60", surplusstockqty: "60", requiredqty: "10"},
  ];

  // addService(){
  //   this.dialog.open(AddServiceChallanComponent, {
  //     width: "700px",
  //     height: "auto"
  //   });
  // }
 
  public totalstockqty() {
    let dialogRef = this.dialog.open(TotalstockqtydialogComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public surplusstockqty() {
    let dialogRef = this.dialog.open(SurplusstockdialogComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  public editspopreqitem(){
    let dialogRef = this.dialog.open(EditspopupReqitemComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
