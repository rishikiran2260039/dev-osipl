import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BulkQuotePopupComponent } from 'src/app/purchase/quotations/items-and-quotes-quotations/bulk-quote-popup/bulk-quote-popup.component';
import { OpenorderspopupServicecontractsComponent } from './openorderspopup-servicecontracts/openorderspopup-servicecontracts.component';
import { QuotationBulkQuotesPopUpComponent } from './quotation-bulk-quotes-pop-up/quotation-bulk-quotes-pop-up.component';

@Component({
  selector: 'app-items-and-quotes-servicecontracts',
  templateUrl: './items-and-quotes-servicecontracts.component.html',
  styleUrls: ['./items-and-quotes-servicecontracts.component.scss']
})
export class ItemsAndQuotesServicecontractsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  filterToggle: boolean = false;
  
  ngOnInit() {
  }
  
  items = [
    {quoterank:"#1",lastquote: 200,BulkQuote: 100, VendorName:"Usha International Ltd",QuoteDate:"02/07/2021",ValidityDate :"05/07/2021",MOQ:"30",UnitRate:210,totalAmount:1800, BulkQty:"120",BulkRate:"150",UnitShippingCost:"2.5",L1:"Yes",VendorRating:"4/5",LastDeliveryDate:"02/07/2020",OpenOrders:"3",},
    {quoterank:"#1",lastquote: 210,BulkQuote: 100, VendorName:"Usha International Ltd",QuoteDate:"02/07/2021",ValidityDate :"05/07/2021",MOQ:"300",UnitRate:220,totalAmount:10000,BulkQty:"120",BulkRate:"150",UnitShippingCost:"2.5",L1:"Yes",VendorRating:"4/5",LastDeliveryDate:"02/07/2020",OpenOrders:"3",},
    {quoterank:"#2",lastquote: 220,BulkQuote: 120,VendorName:"Mallikarjuna Rao",QuoteDate:"03/07/2021",ValidityDate :"06/07/2021",MOQ:"40",UnitRate:230,totalAmount:4800,BulkQty:"110",BulkRate:"170",UnitShippingCost:"2.0",L1:"NO",VendorRating:"3/5",LastDeliveryDate:"03/07/2019",OpenOrders:"2",},
    {quoterank:"#1",lastquote: 190,BulkQuote: 120,VendorName:"Mallikarjuna Rao",QuoteDate:"03/07/2021",ValidityDate :"06/07/2021",MOQ:"400",UnitRate:190,totalAmount:24000,BulkQty:"110",BulkRate:"170",UnitShippingCost:"2.0",L1:"NO",VendorRating:"3/5",LastDeliveryDate:"03/07/2019",OpenOrders:"2",},
    {quoterank:"#3",lastquote: 180,BulkQuote: 180,VendorName:"Arnold D Cruz",QuoteDate:"04/07/2021",ValidityDate :"07/07/2021",MOQ:"50",UnitRate:270,totalAmount:5000,BulkQty:"100",BulkRate:"160",UnitShippingCost:"1.75",L1:"NO",VendorRating:"4.5/5",LastDeliveryDate:"04/08/2020",OpenOrders:"4",},
    {quoterank:"#1",lastquote: 260,BulkQuote: 180,VendorName:"Arnold D Cruz",QuoteDate:"04/07/2021",ValidityDate :"07/07/2021",MOQ:"500",UnitRate:280,totalAmount:45000,BulkQty:"100",BulkRate:"160",UnitShippingCost:"1.75",L1:"NO",VendorRating:"4.5/5",LastDeliveryDate:"04/08/2020",OpenOrders:"4",},
    {quoterank:"#2",lastquote: 270,BulkQuote: 190,VendorName:"Axel adler",QuoteDate:"05/0/2021",ValidityDate :"08/07/2021",MOQ:"30",UnitRate:250,totalAmount:2250,BulkQty:"140",BulkRate:"200",UnitShippingCost:"3.0",L1:"NO",VendorRating:"5/5",LastDeliveryDate:"05/03/2019",OpenOrders:"2",},
    {quoterank:"#2",lastquote: 260,BulkQuote: 190,VendorName:"Axel adler",QuoteDate:"05/0/2021",ValidityDate :"08/07/2021",MOQ:"300",UnitRate:270,totalAmount:18000,BulkQty:"140",BulkRate:"200",UnitShippingCost:"3.0",L1:"NO",VendorRating:"5/5",LastDeliveryDate:"05/03/2019",OpenOrders:"2",},
   
  ];




  public OpenordersQuotationsPopup() {
    let dialogRef = this.dialog.open(OpenorderspopupServicecontractsComponent, {
      height: 'auto' ,
      width: '1100px' 
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  QuotationBulkQuotes(){
    this.dialog.open(QuotationBulkQuotesPopUpComponent, {
      height:'auto', 
      width: "1100px"
    })
  }
  // QuotationBulkQuotes(){
  //   this.dialog.open(QuotationBulkQuotesPopUpComponent, {
  //     height:'auto',
  //     width:"900px"
  //   })

  // }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}