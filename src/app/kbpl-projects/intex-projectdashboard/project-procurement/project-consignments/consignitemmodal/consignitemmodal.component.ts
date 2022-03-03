import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-consignitemmodal',
  templateUrl: './consignitemmodal.component.html',
  styleUrls: ['./consignitemmodal.component.scss']
})
export class ConsignitemmodalComponent implements OnInit {

  constructor(public dialog:MatDialogRef<ConsignitemmodalComponent>) { }

  ngOnInit() {
  }
  
  items = [
    { ItemName : "Tambour Cupboards	", ItemCode: "TBCS", RequisitionRef: "OM/PO/SPA-FEB-19/1057	",RequiredQty:"50",DeliveryDate:"21-07-2021",unitprice:"200" },
    { ItemName : "Filing Cabinets", ItemCode: " FGCS",RequisitionRef: "OM/PO/SPA/APR-20/1005",RequiredQty:"80",DeliveryDate:"24-08-2021",unitprice:"300" },
    { ItemName : "Planter Boxes", ItemCode: "PRBS",RequisitionRef: "OM/PO/SPA-FEB-19/1041",RequiredQty:"20",DeliveryDate:"12-09-2021",unitprice:"400" },
    { ItemName : "Artificial Plants ", ItemCode: "ALPS",RequisitionRef: "OM/PO/SPA/FEB-21/1077",RequiredQty:"30",DeliveryDate:"16-10-2021",unitprice:"300"},
    { ItemName : "Galvanised Steel Inserts ", ItemCode: "GVST",RequisitionRef: "OM/PO/SPA/MAR-21/1086",RequiredQty:"50",DeliveryDate:"13-12-2021",unitprice:"200"},
  ]


  close(){
    this.dialog.close();
  }


}

               