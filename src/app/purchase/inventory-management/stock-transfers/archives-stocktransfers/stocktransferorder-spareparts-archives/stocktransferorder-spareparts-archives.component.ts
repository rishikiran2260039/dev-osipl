import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SurplusstockqtyInArchivesComponent } from '../surplusstockqty-in-archives/surplusstockqty-in-archives.component';
import { TotalstockqtyInArchivesComponent } from '../totalstockqty-in-archives/totalstockqty-in-archives.component';
import { EditspopupStoNoComponent } from './editspopup-sto-no/editspopup-sto-no.component';

@Component({
  selector: 'app-stocktransferorder-spareparts-archives',
  templateUrl: './stocktransferorder-spareparts-archives.component.html',
  styleUrls: ['./stocktransferorder-spareparts-archives.component.scss']
})
export class StocktransferorderSparepartsArchivesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  filterToggle = false;
  ngOnInit() {
  }

  items = [
    { slno: "1", itemno: "1100799SC.", itemname: "TEMPSENSOR (P380)", totalstockqty: "6", surplusstockqty: "6", requiredqty: "1"},
    { slno: "2", itemno: "1103293SC.", itemname: "WASHER (P380)", totalstockqty: "18", surplusstockqty: "18", requiredqty: "2"},
  ];

  // addService(){
  //   this.dialog.open(AddServiceChallanComponent, {
  //     width: "700px",
  //     height: "auto"
  //   });
  // }
 
  public totalstockqty() {
    let dialogRef = this.dialog.open(TotalstockqtyInArchivesComponent, {
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public surplusstockqty() {
    let dialogRef = this.dialog.open(SurplusstockqtyInArchivesComponent, {
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public EditspopupStoNo(){
    let dialogRef = this.dialog.open(EditspopupStoNoComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
 
}
