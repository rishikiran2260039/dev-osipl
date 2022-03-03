import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-items-and-quotes-popup-quotations',
  templateUrl: './items-and-quotes-popup-quotations.component.html',
  styleUrls: ['./items-and-quotes-popup-quotations.component.scss']
})
export class ItemsAndQuotesPopupQuotationsComponent implements OnInit {
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  constructor(public dialog:MatDialogRef<ItemsAndQuotesPopupQuotationsComponent>) 
  { }

  ngOnInit() {
  }
  
  items = [
    { lvalue:"180",ref:"OM/BHL/OCT/19-20/1077",date:"28-Feb-2019",ItemName : "Tambour Cupboards",value:200, ItemCode: "CON/PLY/0112", Quotes: "3",status:"Pending",approvedvendor:"-", quantity:150 },
    { lvalue:"360",ref:"OM/BHL/OCT/19-0/1078",date:"5-Apr-2020",ItemName : "Filing Cabinets",value:400, ItemCode: "CON/PLY/0342",Quotes: "4",status:"Closed",approvedvendor:"Mallikarjuna Rao", quantity : 181 },
    { lvalue:"80",ref:"OM/BHL/OCT/19-20/1079",date:"11-Feb-2019",ItemName : "Planter Boxes",value:100, ItemCode: "CON/PLY/0012",Quotes: "4",status:"Pending",approvedvendor:"-", quantity: 142 },
    { lvalue:"290",ref:"OM/BHL/OCT/19-20/1080",date:"06-Feb-2021",ItemName : "Artificial Plants",value:300, ItemCode: "CON/PLY/0212",Quotes: "5",status:"Closed",approvedvendor:"Axel adler", quantity: 158},
    { lvalue:"450",ref:"OM/BHL/OCT/19-20/1081",date:"30-Mar-2021",ItemName : "Galvanised Steel Inserts",value:500, ItemCode: "CON/PLY/9812",Quotes: "3",status:"Pending",approvedvendor:"-", quantity: 178},
  ]

  close(){
    this.dialog.close();
  }


}
