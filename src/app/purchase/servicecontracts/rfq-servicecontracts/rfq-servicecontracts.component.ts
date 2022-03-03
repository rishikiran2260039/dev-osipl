import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { AddrfqPopupComponent } from '../../material-management/rfq/addrfq-popup/addrfq-popup.component';
import { AddrfqPopupServicecontractsComponent } from './addrfq-popup-servicecontracts/addrfq-popup-servicecontracts.component';
import { RfqgridservicecontractsComponent } from './rfqitem-service-contract/rfqgridservicecontracts/rfqgridservicecontracts.component';
// import { AddrfqPopupServicecontractsComponent } from './addrfq-popup-servicecontracts/addrfq-popup-servicecontracts.component';
// import { RfqQuotesPopupServicecontractsComponent } from './rfq-quotes-popup-servicecontracts/rfq-quotes-popup-servicecontracts.component';

@Component({
  selector: 'app-rfq-servicecontracts',
  templateUrl: './rfq-servicecontracts.component.html',
  styleUrls: ['./rfq-servicecontracts.component.scss']
})

export class RfqServicecontractsComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change this.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  constructor(public dialog: MatDialog) { }
  filterToggle = false;

  ngOnInit() { 
  }

  openGridColumnsDialog(){
    this.dialog.open(RfqgridservicecontractsComponent,{
      width:"600px",
      height:"auto"
    }) 
  }
  items = [
    {SOW:"Add",pcode:"E005KA10012",wotype:"MEP",quotationref: "OM/RFQ/Feb-19/R60000442", "RFQDate": "28-Feb-2019", "VendorName": "Usha International Ltd", "Quotes": "3/5",ClosureDate:"23-07-2021",status:"Requested",rfqref:"OM/REQ/SPA-FEB-19/1057",rfqtitle:"Procurement for Civil material items",email:"David123@gmail.com",contactnumber:"9876543212",remarks:"Complaince over Material issues - to be delivered on time", items:5},
    {SOW:"View",pcode:"E005KA10013",wotype:"Sub Contract",quotationref: "OM/RFQ/Mar-19/R60000443", "RFQDate": "25-Apr-2020", "VendorName": "Mallikarjuna Rao", "Quotes": "4/5",ClosureDate:"16-07-2021",status:"Quoted",rfqref:"OM/REQ/SPA/APR-20/1005",rfqtitle:"Procurement for Interior Decorations",email:"samual135@gmail.com",contactnumber:"1324534675",remarks:"Need to qualify QA test ", items:5},
    {SOW:"Add",pcode:"E005KA10014",wotype:"MEP",quotationref: "OM/RFQ/Apr-19/R60000444", "RFQDate": "11-Feb-2019", "VendorName": "Arnold D Cruz", "Quotes": "2/5",ClosureDate:"19-08-2021",status:"Partial",rfqref:"OM/REQ/SPA-FEB-19/1041",rfqtitle:"Procurement of Electric line items ",email:"AbrahamForssell@gmail.com",contactnumber:"8678124596",remarks:"Precision Equipments with high Capacity required", items:5},
    {SOW:"View",pcode:"E005KA10015",wotype:"Sub Contract",quotationref: "OM/RFQ/May-19/R60000445", "RFQDate": "06-Feb-2021", "VendorName": "Axel adler", "Quotes": "3/5",ClosureDate:"25-10-2021",status:"Expired",rfqref:"OM/REQ/SPA/FEB-21/1077",rfqtitle:"Procurement for Machinery for demolition",email:"Axeladler@gmail.com",contactnumber:"9134724335",remarks:"Need for high performance materials", items:5},
    {SOW:"Add",pcode:"E005KA10016",wotype:"MEP",quotationref: "OM/RFQ/Feb-19/R60000446", "RFQDate": "28-Feb-2019", "VendorName": "Usha International Ltd", "Quotes": "3/5",ClosureDate:"23-07-2021",status:"Requested",rfqref:"OM/REQ/SPA/MAR-21/1086",rfqtitle:"Procurement of Elevator materials",email:"Adolfbrat132@gmail.com",contactnumber:"6546547891",remarks:"Materials with Corrosion resistant steel and high tensile strength", items:5},
    {SOW:"View",pcode:"E005KA10017",wotype:"Sub Contract",quotationref: "OM/RFQ/Feb-19/R60000447", "RFQDate": "25-Apr-2020", "VendorName": "Mallikarjuna Rao", "Quotes": "4/5",ClosureDate:"16-07-2021",status:"Expired",rfqref:"OM/REQ/SPA/APR-20/1005",rfqtitle:"Procurement for Viaduct materials",email:"AbrahamForssell@gmail.com",contactnumber:"9898976897",remarks:"Need to qualify QA test", items:5},
  ];

  
  uploaddoc()
  {
    let dialogRef = this.dialog.open(UploadDocComponent, {
      data: null,
      height:'auto',
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(data => {
     // this.getAllUsers();
    });
  }

  statusOptions = [
    { value: 1, name: 'Completed', colorCode: '#00ff0040' },
    { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
    { value: 3, name: 'In Process', colorCode: '#87CEFA' },
    { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  ];

  updateNewLead(item:any) {
    console.log(item, 'item');
    delete item['meeting_time']
    if (item['potential'] == 0) {
      item['potential'] = 1;
      item["toolT"] = "Done";
    } else if (item['potential'] == 1) {
      item['potential'] = 2;
      item["toolT"] = "Pending";
    } else if (item['potential'] == 2) {
      item['potential'] = 3;
      item["toolT"] = "Partial";
    } else if (item['potential'] == 3) {
      item['potential'] = 4;
      item["toolT"] = "Declined";
    } else if (item['potential'] == 4) {
      item['potential'] = 1;
      item["toolT"] = "Done";
    }
  
  }

  public AddrfqPopup(item) {
    let dialogRef = this.dialog.open(AddrfqPopupServicecontractsComponent, {
      data : item,
      height: 'auto',
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(data => {
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







