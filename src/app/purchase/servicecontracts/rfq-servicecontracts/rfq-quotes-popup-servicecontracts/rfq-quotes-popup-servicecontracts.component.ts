import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { QuotesscreenServcontsAddDialogComponent } from './quotesscreen-servconts-add-dialog/quotesscreen-servconts-add-dialog.component';

@Component({
  selector: 'app-rfq-quotes-popup-servicecontracts',
  templateUrl: './rfq-quotes-popup-servicecontracts.component.html',
  styleUrls: ['./rfq-quotes-popup-servicecontracts.component.scss']
})
export class RfqQuotesPopupServicecontractsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
 
  

  items = [
    {Part:"B229900003680",ItemName:"Komatsu",PartMake:"Volvo",QuantityRequired: "50",RequiredBy:"21-07-2021",PreviousQuote:"15,000",QuoteAmount:"18,000",status:"Active" },
    {Part:"421-60-35170",ItemName:"Volvo",PartMake:"Caterpillar",QuantityRequired: "80",RequiredBy:"24-08-2021",PreviousQuote:"25,000",QuoteAmount:"27,000",status:"Inactive"},
    {Part:"B229900003680",ItemName:"Caterpillar",PartMake:"Kirloskar", QuantityRequired: "20",RequiredBy:"12-09-2021",PreviousQuote:"10,000",QuoteAmount:"12,000",status:"Active"  },
    {Part:"421-60-35170",ItemName:"Kirloskar",PartMake:"Ashok Leyland",QuantityRequired: "30",RequiredBy:"16-10-2021",PreviousQuote:"12,000",QuoteAmount:"15,000",status:"Inactive" },
    {Part:"521-60-34512",ItemName:"Ashok Leyland",PartMake:"Tata",QuantityRequired: "50",RequiredBy:"13-12-2021",PreviousQuote:"15,000",QuoteAmount:"16,000",status:"Active" },
  ]

 Quotesscreenadd(item){
   this.dialog.open(QuotesscreenServcontsAddDialogComponent, {
     data:item,
     height:'auto',
     width:'800px',
   }
    )
 }


  
}
