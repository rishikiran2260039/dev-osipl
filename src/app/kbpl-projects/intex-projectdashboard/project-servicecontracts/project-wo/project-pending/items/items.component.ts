import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ItemsUnpublishPopupComponent } from 'src/app/purchase/material-management/purchase-orders/unpublished-po/items-unpublish-popup/items-unpublish-popup.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  constructor(public dialog:MatDialogRef<ItemsUnpublishPopupComponent>) { }

  ngOnInit() {
  }
  
  items = [ 
    {Naam: "Reinforcement Steel", co: "FMX480",Amount: "2500", Price: "22",AvailQty:"70",ReqRef: "OM/REQ/SPA-FEB-19/1057	",Qty:"120 Ton",  IName : "Reinforcement Steel", ItemCode: "FMX480", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",DeliveryDate:"21-07-2021",unitprice:"200" }, 
  {Naam: "Electrical Wire(14-Gauge)",co: "D85ESS 17	",Amount: "500",Price: "12",AvailQty:"20",ReqRef: "OM/REQ/SPA-JUNE-19/3212	",Qty:"30M",IName:"Electric Wire(14-Gauge)	", ItemCode: "ACTROS 4841K",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",DeliveryDate:"16-10-2021",unitprice:"300"},
  
  ] 

  close(){
    this.dialog.close();
  }


}
