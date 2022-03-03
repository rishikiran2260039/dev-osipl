import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BulkQuotePopupComponent } from './bulk-quote-popup/bulk-quote-popup.component';
import { OpenordersQuotationsPopupComponent } from './openorders-quotations-popup/openorders-quotations-popup.component';

@Component({
  selector: 'app-items-and-quotes-quotations',
  templateUrl: './items-and-quotes-quotations.component.html',
  styleUrls: ['./items-and-quotes-quotations.component.scss']
})
export class ItemsAndQuotesQuotationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  filterToggle: boolean = false;
  
  ngOnInit() {
  }
  
  items = [
    {BulkQuote: 100, VendorName:"Usha International Ltd",QuoteDate:"02/07/2021",ValidityDate :"05/07/2021",MOQ:"30",UnitRate:60,totalAmount:1800, BulkQty:"120",BulkRate:"150",UnitShippingCost:"2.5",L1:"Yes",VendorRating:"4/5",LastDeliveryDate:"02/07/2020",OpenOrders:"3",},
    {BulkQuote: 100, VendorName:"Usha International Ltd",QuoteDate:"02/07/2021",ValidityDate :"05/07/2021",MOQ:"300",UnitRate:48,totalAmount:10000,BulkQty:"120",BulkRate:"150",UnitShippingCost:"2.5",L1:"Yes",VendorRating:"4/5",LastDeliveryDate:"02/07/2020",OpenOrders:"3",},
    {BulkQuote: 120,VendorName:"Mallikarjuna Rao",QuoteDate:"03/07/2021",ValidityDate :"06/07/2021",MOQ:"40",UnitRate:120,totalAmount:4800,BulkQty:"110",BulkRate:"170",UnitShippingCost:"2.0",L1:"NO",VendorRating:"3/5",LastDeliveryDate:"03/07/2019",OpenOrders:"2",},
    {BulkQuote: 120,VendorName:"Mallikarjuna Rao",QuoteDate:"03/07/2021",ValidityDate :"06/07/2021",MOQ:"400",UnitRate:60,totalAmount:24000,BulkQty:"110",BulkRate:"170",UnitShippingCost:"2.0",L1:"NO",VendorRating:"3/5",LastDeliveryDate:"03/07/2019",OpenOrders:"2",},
    {BulkQuote: 180,VendorName:"Arnold D Cruz",QuoteDate:"04/07/2021",ValidityDate :"07/07/2021",MOQ:"50",UnitRate:100,totalAmount:5000,BulkQty:"100",BulkRate:"160",UnitShippingCost:"1.75",L1:"NO",VendorRating:"4.5/5",LastDeliveryDate:"04/08/2020",OpenOrders:"4",},
    {BulkQuote: 180,VendorName:"Arnold D Cruz",QuoteDate:"04/07/2021",ValidityDate :"07/07/2021",MOQ:"500",UnitRate:90,totalAmount:45000,BulkQty:"100",BulkRate:"160",UnitShippingCost:"1.75",L1:"NO",VendorRating:"4.5/5",LastDeliveryDate:"04/08/2020",OpenOrders:"4",},
    {BulkQuote: 190,VendorName:"Axel adler",QuoteDate:"05/0/2021",ValidityDate :"08/07/2021",MOQ:"30",UnitRate:75,totalAmount:2250,BulkQty:"140",BulkRate:"200",UnitShippingCost:"3.0",L1:"NO",VendorRating:"5/5",LastDeliveryDate:"05/03/2019",OpenOrders:"2",},
    {BulkQuote: 190,VendorName:"Axel adler",QuoteDate:"05/0/2021",ValidityDate :"08/07/2021",MOQ:"300",UnitRate:60,totalAmount:18000,BulkQty:"140",BulkRate:"200",UnitShippingCost:"3.0",L1:"NO",VendorRating:"5/5",LastDeliveryDate:"05/03/2019",OpenOrders:"2",},
   
  ];




  public OpenordersQuotationsPopup() {
    let dialogRef = this.dialog.open(OpenordersQuotationsPopupComponent, {
      height: 'auto' ,
      width: '1100px' 
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

    
  BulkQuotepop(){
    this.dialog.open(BulkQuotePopupComponent, {
      height:'auto',
      width:'1300px'
    });
  }


  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}