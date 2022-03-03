import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { NewDialogComponent } from './new-dialog/new-dialog.component';
import { QuotesAddDocumentComponent } from './quotes-add-document/quotes-add-document.component';
import { QuotesAddPreviousComponent } from './quotes-add-previous/quotes-add-previous.component';

@Component({
  selector: 'app-quotes-docs',
  templateUrl: './quotes-docs.component.html',
  styleUrls: ['./quotes-docs.component.scss']
})
export class QuotesDocsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  filterToggle = false;

  ngOnInit() {
  }

  items = [
    { doc: "Interior Designs",variantRef:'FLC/2019/05/0031/1',variantName:'Standup Pouch',des:'Document for updated Indation process',verNum:'2.3',curVer: "View", preVer: "8", verRem: "Verified By Mr.Stokes",},
    { doc: "Provide Estimated Forecast",variantRef:'FLC/2019/05/0032/1',variantName:'Threshold',des:'Lastest forecast report from head office',verNum:'1.2',curVer: "View", preVer: "6", verRem: "Latest Document",},
    { doc: "NDT Methods",variantRef:'FLC/2019/05/0033/1',variantName:'Spray Paint',des:'NFP lables for shippings',verNum:'2.5',curVer: "View", preVer: "10", verRem: "Needs Verification",},
    { doc: "RFP & Analysis",variantRef:'FLC/2019/05/0034/1',variantName:'Standup Pouch',des:'RPF analysis for shipments through public sectors',verNum:'3.8',curVer: "View", preVer: "14", verRem: "-",},
    { doc: "Finalize Assortment",variantRef:'FLC/2019/05/0035/1',variantName:'Black Hoe',des:'Assortment sheet for FFL Shipments',verNum:'1.1',curVer: "View", preVer: "5", verRem: "Verified by Mr.David",},
    { doc: "Provide Match Samples To MIS",variantRef:'FLC/2019/05/0036/1',variantName:'Excavator',des:'Match sample report from government',verNum:'2.9',curVer: "View", preVer: "10", verRem: "Needs Verification",},
    { doc: "Store Availablity",variantRef:'FLC/2019/05/0037/1',variantName:'Altroasonic ',des:'Testing protocols for shipments through air',verNum:'3.2',curVer: "View", preVer: "8", verRem: "-",},
    { doc: "Finilize Availablity",variantRef:'FLC/2019/05/0038/1',variantName:'Reorder Point',des:'NFP lables for shippings',verNum:'4,7',curVer: "View", preVer: "19", verRem: "Needs Verification",},

  ]

  public openpreviousDialog(id) {
    let dialogRef = this.dialog.open(QuotesAddPreviousComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openNewDialog(id) {
    let dialogRef = this.dialog.open(NewDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(QuotesAddDocumentComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  opencontactDialog1(){
    let dialogRef = this.dialog.open(EditDocumentComponent, {
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
