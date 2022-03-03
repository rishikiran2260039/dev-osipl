import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateStockTransferRequestDialogComponent } from '../../active-stock-transfers/create-stock-transfer-request-dialog/create-stock-transfer-request-dialog.component';
import { EditStocktransferRequestComponent } from './edit-stocktransfer-request/edit-stocktransfer-request.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

 
  constructor(public dialog: MatDialog) { }
  filterToggle = false;

  ngOnInit() {
  }


               

  items = [
    { SL: "1", StockTransferNo: "STO/OTP-OM/OCT-19/10001", Date: "07-Oct-2019", RequestTitle: "REQUIRED 50 ITEMS", Project: "Singrauli", Category: "Spare Parts", RequestedItems: "2", ApprovedItems: "2", Status: "Approved"},
    { SL: "2", StockTransferNo: "STO/OTP-OM/OCT-19/10004", Date: "14-Oct-2019", RequestTitle: "NEED 120 ITEMS", Project: "Singrauli", Category: "Spare Parts", RequestedItems: "1", ApprovedItems: "0", Status: "Pending for Approval"},
    { SL: "3", StockTransferNo: "STO/OTP-OM/OCT-19/10005", Date: "15-Oct-2019", RequestTitle: "CHECK RC CONDITIONS", Project: "Singrauli", Category: "Spare Parts", RequestedItems: "1", ApprovedItems: "0", Status: "Delayed"},
    { SL: "4", StockTransferNo: "STO/OTP-OM/OCT-19/10007", Date: "21-Oct-2019", RequestTitle: "EREWRT", Project: "Singrauli", Category: "Materials", RequestedItems: "1", ApprovedItems: "2", Status: "Delayed"},
    { SL: "5", StockTransferNo: "STO/OTP-OM/OCT-19/10008", Date: "21-Oct-2019", RequestTitle: "MATERIAL LOCATION CHECK, STOCK TRANSFER, GRN AND CONSIGNMENTS", Project: "Singrauli", Category: "Materials", RequestedItems: "1", ApprovedItems: "0", Status: "Pending for Approval"},
    { SL: "6", StockTransferNo: "STO/OTP-OM/MAR-21/10010", Date: "04-Mar-2021", RequestTitle: "IMMEDTIATE NEED FOR 100 ITEMS",Project: "Singrauli", Category: "Spare Parts", RequestedItems: "0", ApprovedItems: "0", Status: "Pending for Submission"},
    
    
  ];


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

  public createstocktransferrequest() {
    let dialogRef = this.dialog.open(CreateStockTransferRequestDialogComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public opencontactDialog1(item) {
    let dialogRef = this.dialog.open(EditStocktransferRequestComponent, {
      data: item,
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  

}
