import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridViewClientsComponent } from 'src/app/clients/grid-view/grid-view-clients/grid-view-clients.component';
import { UploadDocComponent } from 'src/app/shared/upload-doc/upload-doc.component';
import { GridColomRqComponent } from '../grid-colom-rq/grid-colom-rq.component';
import { AddrfqPopupComponent } from './addrfq-popup/addrfq-popup.component';
import { EditrfqformpopupComponent } from './editrfqformpopup/editrfqformpopup.component';

@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})

export class RfqComponent implements OnInit {
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


  items = [
    {pcode:"E005KA10012",SOW:"Add",quoteexpirydate: "28-Feb-2021",quotationref: "OM/RFQ/Feb-19/R60000442", "RFQDate": "28-Feb-2019", "VendorName": "Usha International Ltd", "Quotes": "3/5",ClosureDate:"23-07-2021",qty:"5",stageColour: '#00ff0040',"Status": 1,status:"Requested",rfqref:"OM/REQ/SPA-FEB-19/1057",rfqtitle:"Procurement for Civil material items",email:"David123@gmail.com",contactnumber:"9876543212",remarks:"Complaince over Material issues - to be delivered on time"},
    {pcode:"E005KA10013",SOW:"View",quoteexpirydate: "20-Feb-2021",quotationref: "OM/RFQ/Mar-19/R60000443", "RFQDate": "25-Apr-2020", "VendorName": "Mallikarjuna Rao", "Quotes": "4/5",ClosureDate:"16-07-2021",qty:"5",stageColour: '#C0C0C0',"Status": 2,status:"Quoted",rfqref:"OM/REQ/SPA/APR-20/1005",rfqtitle:"Procurement for Interior Decorations",email:"samual135@gmail.com",contactnumber:"1324534675",remarks:"Need to qualify QA test "},
    {pcode:"E005KA10014",SOW:"Add",quoteexpirydate: "18-Feb-2021",quotationref: "OM/RFQ/Apr-19/R60000444", "RFQDate": "11-Feb-2019", "VendorName": "Arnold D Cruz", "Quotes": "2/4",ClosureDate:"19-08-2021",qty:"4",stageColour: '#87CEFA',"Status": 3,status:"Partial",rfqref:"OM/REQ/SPA-FEB-19/1041",rfqtitle:"Procurement of Electric line items ",email:"AbrahamForssell@gmail.com",contactnumber:"8678124596",remarks:"Precision Equipments with high Capacity required"},
    {pcode:"E005KA10015",SOW:"View",quoteexpirydate: "18-Feb-2021",quotationref: "OM/RFQ/May-19/R60000445", "RFQDate": "06-Feb-2021", "VendorName": "Axel adler", "Quotes": "3/5",ClosureDate:"25-10-2021",qty:"5",stageColour: '#FFA50069',"Status": 4,status:"Expired",rfqref:"OM/REQ/SPA/FEB-21/1077",rfqtitle:"Procurement for Machinery for demolition",email:"Axeladler@gmail.com",contactnumber:"9134724335",remarks:"Need for high performance materials"},
    {pcode:"E005KA10016",SOW:"Add",quoteexpirydate: "09-Feb-2021",quotationref: "OM/RFQ/Feb-19/R60000446", "RFQDate": "28-Feb-2019", "VendorName": "Usha International Ltd", "Quotes": "3/5",ClosureDate:"23-07-2021",qty:"5",stageColour: '#00ff0040',"Status": 1,status:"Requested",rfqref:"OM/REQ/SPA/MAR-21/1086",rfqtitle:"Procurement of Elevator materials",email:"Adolfbrat132@gmail.com",contactnumber:"6546547891",remarks:"Materials with Corrosion resistant steel and high tensile strength"},
    {pcode:"E005KA10017",SOW:"View",quoteexpirydate: "26-jan-2021",quotationref: "OM/RFQ/Feb-19/R60000447", "RFQDate": "25-Apr-2020", "VendorName": "Mallikarjuna Rao", "Quotes": "4/5",ClosureDate:"16-07-2021",qty:"5",stageColour: '#FFA50069',"Status": 4,status:"Expired",rfqref:"OM/REQ/SPA/APR-20/1005",rfqtitle:"Procurement for Viaduct materials",email:"AbrahamForssell@gmail.com",contactnumber:"9898976897",remarks:"Need to qualify QA test"},
// =======
//     {quotationref: "OM/RFQ/Feb-19/R60000442", "RFQDate": "28-Feb-2019", "VendorName": "Usha International Ltd", "Quotes": "3/5",ClosureDate:"23-07-2021",qty:"5",stageColour: '#00ff0040',"Status": 1,status:"Requested",rfqref:"OM/REQ/SPA-FEB-19/1057",rfqtitle:"Procurement for Civil material items",email:"David123@gmail.com",contactnumber:"9876543212",remarks:"Complaince over Material issues - to be delivered on time"},
//     {quotationref: "OM/RFQ/Mar-19/R60000443", "RFQDate": "25-Apr-2020", "VendorName": "Mallikarjuna Rao", "Quotes": "4/5",ClosureDate:"16-07-2021",qty:"5",stageColour: '#C0C0C0',"Status": 2,status:"Quoted",rfqref:"OM/REQ/SPA/APR-20/1005",rfqtitle:"Procurement for Interior Decorations",email:"samual135@gmail.com",contactnumber:"1324534675",remarks:"Need to qualify QA test "},
//     {quotationref: "OM/RFQ/Apr-19/R60000444", "RFQDate": "11-Feb-2019", "VendorName": "Arnold D Cruz", "Quotes": "2/4",ClosureDate:"19-08-2021",qty:"4",stageColour: '#87CEFA',"Status": 3,status:"Partial",rfqref:"OM/REQ/SPA-FEB-19/1041",rfqtitle:"Procurement of Electric line items ",email:"AbrahamForssell@gmail.com",contactnumber:"8678124596",remarks:"Precision Equipments with high Capacity required"},
//     {quotationref: "OM/RFQ/May-19/R60000445", "RFQDate": "06-Feb-2021", "VendorName": "Axel adler", "Quotes": "3/5",ClosureDate:"25-10-2021",qty:"5",stageColour: '#FFA50069',"Status": 4,status:"Expired",rfqref:"OM/REQ/SPA/FEB-21/1077",rfqtitle:"Procurement for Machinery for demolition",email:"Axeladler@gmail.com",contactnumber:"9134724335",remarks:"Need for high performance materials"},
//     {quotationref: "OM/RFQ/Feb-19/R60000446", "RFQDate": "28-Feb-2019", "VendorName": "Usha International Ltd", "Quotes": "3/5",ClosureDate:"23-07-2021",qty:"5",stageColour: '#00ff0040',"Status": 1,status:"Requested",rfqref:"OM/REQ/SPA/MAR-21/1086",rfqtitle:"Procurement Procurement for Machinery for demolition",email:"Adolfbrat132@gmail.com",contactnumber:"6546547891",remarks:"Materials with Corrosion resistant steel and high tensile strength"},
//     {quotationref: "OM/RFQ/Feb-19/R60000447", "RFQDate": "25-Apr-2020", "VendorName": "Mallikarjuna Rao", "Quotes": "4/5",ClosureDate:"16-07-2021",qty:"5",stageColour: '#FFA50069',"Status": 4,status:"Expired",rfqref:"OM/REQ/SPA/APR-20/1005",rfqtitle:"Procurement for Viaduct materials",email:"AbrahamForssell@gmail.com",contactnumber:"9898976897",remarks:"Need to qualify QA test"},
// >>>>>>> rishi
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
    { value: 1, name: 'Requested', colorCode: '#00ff0040' },
    { value: 2, name: 'Quoted', colorCode: '#C0C0C0' },
    { value: 3, name: 'Partial', colorCode: '#87CEFA' },
    { value: 4, name: 'Expired', colorCode: '#FFA50069' },
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
    let dialogRef = this.dialog.open(AddrfqPopupComponent, {
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
  openGridColumnsDialog(){
    this.dialog.open(GridColomRqComponent,{
      width:"600px",
      height:"auto"
    })
  }

  addrequisition(item){
    let dialogRef = this.dialog.open(EditrfqformpopupComponent, {
      data : item,
      height: 'auto',
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}