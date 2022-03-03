import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-bulk-quote-popup',
  templateUrl: './bulk-quote-popup.component.html',
  styleUrls: ['./bulk-quote-popup.component.scss']
})
export class BulkQuotePopupComponent implements OnInit {

  constructor(public dialog: MatDialogRef<BulkQuotePopupComponent>) { }

  ngOnInit() {
  }
  
  items = [
    {Bulk:"2", VendorName:"Volvo",Code:"FMX480",MOQ:"B22990003680",UnitRate:"Komatsu",BulkQty:"120",BulkRate:"150",UnitShippingCost:"200",L1:"Yes",VendorRating:"4/5",LastDeliveryDate:"02/07/2020",OpenOrders:"1",},
    {Bulk: "4",VendorName:"Mercedes",Code:"FMX520",MOQ:"B22990003680",UnitRate:"Kochikame",BulkQty:"110",BulkRate:"170",UnitShippingCost:"400",L1:"NO",VendorRating:"3/5",LastDeliveryDate:"03/07/2019",OpenOrders:"2",},
    {Bulk: "9",VendorName:"Lamborgini",Code:"FMX810",MOQ:"B22990003680",UnitRate:"Kithretsu",BulkQty:"100",BulkRate:"160",UnitShippingCost:"600",L1:"NO",VendorRating:"4.5/5",LastDeliveryDate:"04/08/2020",OpenOrders:"3",},
    {Bulk: "10",VendorName:"Porshe",Code:"FMX201",MOQ:"B22990003680",UnitRate:"Devgyan",BulkQty:"140",BulkRate:"200",UnitShippingCost:"800",L1:"NO",VendorRating:"5/5",LastDeliveryDate:"05/03/2019",OpenOrders:"4",},
   
  ];
  close(){
    this.dialog.close();
    
  }
}
