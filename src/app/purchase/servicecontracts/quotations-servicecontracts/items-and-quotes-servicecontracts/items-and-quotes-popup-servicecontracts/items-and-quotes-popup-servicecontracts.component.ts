import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-items-and-quotes-popup-servicecontracts',
  templateUrl: './items-and-quotes-popup-servicecontracts.component.html',
  styleUrls: ['./items-and-quotes-popup-servicecontracts.component.scss']
})
export class ItemsAndQuotesPopupServicecontractsComponent implements OnInit {
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  constructor(public dialog:MatDialogRef<ItemsAndQuotesPopupServicecontractsComponent>) { }

  ngOnInit() {
  }
  
  items = [
    { ItemName : "Tambour Cupboards",value:200, ItemCode: "TBCS", Quotes: "3",status:"Review",approvedvendor:"Usha International Ltd", quantity:150 },
    { ItemName : "Filing Cabinets",value:400, ItemCode: "FGCS",Quotes: "4",status:"Closed",approvedvendor:"Mallikarjuna Rao", quantity : 181 },
    { ItemName : "Planter Boxes",value:100, ItemCode: "PRBS",Quotes: "4",status:"Pending",approvedvendor:"Arnold D Cruz", quantity: 142 },
    { ItemName : "Artificial Plants",value:300, ItemCode: "ALPS",Quotes: "5",status:"Closed",approvedvendor:"Axel adler", quantity: 158},
    { ItemName : "Galvanised Steel Inserts",value:500, ItemCode: "GVST",Quotes: "3",status:"Review",approvedvendor:"Usha International Ltd", quantity: 178},
  ]

  close(){
    this.dialog.close();
  }


}
