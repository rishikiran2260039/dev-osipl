import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-quantity-pop-up',
  templateUrl: './quantity-pop-up.component.html',
  styleUrls: ['./quantity-pop-up.component.scss']
})
export class QuantityPopUpComponent implements OnInit {

  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  constructor(public dialog:MatDialogRef<QuantityPopUpComponent>) 
  { }

  ngOnInit() {
  }
  
  items = [
    { lvalue:"180",ref:"OM/BHL/OCT/19-20/1077",date:"28-Feb-2019",ItemName : "ertyuio7654dfd",value:200, ItemCode: "CON/PLY/0112", Quotes: "3",status:"Pending",approvedvendor:"-", quantity:150 },
    { lvalue:"360",ref:"OM/BHL/OCT/19-0/1078",date:"5-Apr-2020",ItemName : "ajhah45186",value:400, ItemCode: "CON/PLY/0342",Quotes: "4",status:"Closed",approvedvendor:"Mallikarjuna Rao", quantity : 181 },
    { lvalue:"80",ref:"OM/BHL/OCT/19-20/1079",date:"11-Feb-2019",ItemName : "acsa7895",value:100, ItemCode: "CON/PLY/0012",Quotes: "4",status:"Pending",approvedvendor:"-", quantity: 142 },
    { lvalue:"290",ref:"OM/BHL/OCT/19-20/1080",date:"06-Feb-2021",ItemName : "46Acb153",value:300, ItemCode: "CON/PLY/0212",Quotes: "5",status:"Closed",approvedvendor:"Axel adler", quantity: 158},
    { lvalue:"450",ref:"OM/BHL/OCT/19-20/1081",date:"30-Mar-2021",ItemName : "7991AXK12",value:500, ItemCode: "CON/PLY/9812",Quotes: "3",status:"Pending",approvedvendor:"-", quantity: 178},
  ]

  close(){
    this.dialog.close();
  }

}
