import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-items-archived-popup',
  templateUrl: './items-archived-popup.component.html',
  styleUrls: ['./items-archived-popup.component.scss']
})
export class ItemsArchivedPopupComponent implements OnInit {
 
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';

  constructor() {
 
   }

  ngOnInit() {
  }
 
  items = [ 
    {length:"200 CM",width:"57 CM",height:"113 MM",cat:"Plaster & Boards",subcat:"Commercial",dimen:"200 x 100 x 60 MM",thick:"60 MM",brand:"IGL",uom:"NOS",unitprice1:"6000",AvailQty:"70",OrderQty: "30",ReqRef: "OM/REQ/SPA-FEB-19/1057	",Qty:10,  ItemName : "Planter Boxes", ItemCode: "CON/PLY/0112", RequisitionRef: "OM/REQ/SPA-FEB-19/1057	",RequiredQty:"50",DeliveryDate:"21-07-2021",unitprice:"200" }, 
    {length:"100 CM",width:"47 CM",height:"63 MM", cat:"Ply/Boards",subcat:"FLEXIPLY",dimen:"300 x 100 x 60 MM",thick:"40 MM",brand:"VANGYP",uom:"KG",unitprice1:"9000",AvailQty:"80",OrderQty: "30",ReqRef: "OM/REQ/SPA-APR-19/1213	",Qty:40, ItemName : "Tambour Cupboards", ItemCode: " CON/PLY/7863",RequisitionRef: "OM/REQ/SPA/APR-20/1005",RequiredQty:"80",DeliveryDate:"24-08-2021",unitprice:"300" },
    {length:"120 CM",width:"44 CM",height:"99 MM", cat:"Steel",subcat:"Commercial",dimen:"100 x 50 x 10 MM",thick:"60 MM",brand:"IGL",uom:"MM",unitprice1:"8000",AvailQty:"60",OrderQty: "20",ReqRef: "OM/REQ/SPA-MAY-19/1902	",Qty:30, ItemName : "Artificial Plants", ItemCode: "CON/PLY/1863",RequisitionRef: "OM/REQ/SPA-FEB-19/1041",RequiredQty:"20",DeliveryDate:"12-09-2021",unitprice:"400" }, 
    {length:"120 CM",width:"44 CM",height:"99 MM", cat:"Ply/Boards",subcat:"FLEXIPLY",dimen:"200 x 100 x 60 MM",thick:"40 MM",brand:"VANGYP",uom:"NOS",unitprice1:"12000",AvailQty:"20",OrderQty: "40",ReqRef: "OM/REQ/SPA-JUNE-19/3212	",Qty:10, ItemName : "Filling Cabinetes ", ItemCode: "CON/PLY/9363",RequisitionRef: "OM/REQ/SPA/FEB-21/1077",RequiredQty:"30",DeliveryDate:"16-10-2021",unitprice:"300"}, 
    {length:"220 CM",width:"54 CM",height:"193 MM",cat:"Plaster & Boards",subcat:"Commercial",dimen:"300 x 200 x 70 MM",thick:"60 MM",brand:"IGL",uom:"KG",unitprice1:"12000",AvailQty:"30",OrderQty: "60",ReqRef: "OM/REQ/SPA-SEP-19/1343	",Qty:50, ItemName : "Metal Lockers", ItemCode: "CON/PLY/9863",RequisitionRef: "OM/REQ/SPA/MAR-21/1086",RequiredQty:"50",DeliveryDate:"13-12-2021",unitprice:"200"}, ] 
 
 
  getvalue(a,b)
  {
    return a*b;
  }
  
}