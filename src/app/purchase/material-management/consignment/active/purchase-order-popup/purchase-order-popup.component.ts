import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-purchase-order-popup',
  templateUrl: './purchase-order-popup.component.html',
  styleUrls: ['./purchase-order-popup.component.scss']
})
export class PurchaseOrderPopupComponent implements OnInit {
  constructor(public dialog : MatDialogRef<PurchaseOrderPopupComponent>,) { }
  ngOnInit() {
  }
 
 
  items = [
    {PORef:"OM/BHL/OCT/19-20/1077",Vendor:"Menon Bearings Ltd ",POType:"No FOC",Delivery:"12/09/2021",Value:"25,788.00",Status: 1,stageColour: '#00ff0040',},
    {PORef:"OM/BHL/OCT/19-20/1088",Vendor:"Mallikarjuna Rao",POType:"No FOC",Delivery:"18/09/2021",Value:"33,000.00",Status:3,stageColour: '#FFA50069',},
    {PORef:"OM/BHL/OCT/19-20/1079",Vendor:"Arnold D Cruz",POType:"No FOC",Delivery:"21/10/2021",Value:"29,788.00",Status:2,stageColour: '#87CEFA',},
    {PORef:"OM/BHL/OCT/19-20/1080",Vendor:"Axel adler	",POType:"No FOC",Delivery:"23/12/2021",Value:"32,788.00",Status:1,stageColour: '#00ff0040',},
   
  ];
  statusOptions = [
    {value:1, name: 'Paid', colorCode: '#00ff0040'},
    
    {value:2, name: 'Delivered', colorCode: '#87CEFA'},
    {value:3, name: 'Delayed', colorCode: '#FFA50069'},
  ]

  
  close(){
    this.dialog.close();
  }
}
               