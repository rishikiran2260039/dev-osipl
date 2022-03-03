import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-openorders-quotations-popup',
  templateUrl: './openorders-quotations-popup.component.html',
  styleUrls: ['./openorders-quotations-popup.component.scss']
})
export class OpenordersQuotationsPopupComponent implements OnInit {

  constructor(public dialog : MatDialogRef<OpenordersQuotationsPopupComponent>,) { }
  ngOnInit() {
  }
 
 
  items = [
    {PORef:"OM/BHL/OCT/19-20/1077",Vendor:"Menon Bearings Ltd ",POType:"No FOC",Delivery:"12/09/2021",Value:"25,788.00",status:"Paid"},
    {PORef:"OM/BHL/OCT/19-20/1088",Vendor:"Mallikarjuna Rao",POType:"No FOC",Delivery:"18/09/2021",Value:"33,000.00",status:"Delayed"},
    {PORef:"OM/BHL/OCT/19-20/1079",Vendor:"Arnold D Cruz",POType:"No FOC",Delivery:"21/10/2021",Value:"29,788.00",status:"Delivered"},
    {PORef:"OM/BHL/OCT/19-20/1080",Vendor:"Axel adler	",POType:"No FOC",Delivery:"23/12/2021",Value:"32,788.00",status:"Paid"},
   
  ];

  
  close(){
    this.dialog.close();
  }

}
