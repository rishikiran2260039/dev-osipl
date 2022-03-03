import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discrepancies',
  templateUrl: './discrepancies.component.html',
  styleUrls: ['./discrepancies.component.scss']
})
export class DiscrepanciesComponent implements OnInit {

  constructor() { }
  filterToggle = false;

  ngOnInit() {
  }
 

  items:any[] = [
    { "Vendor": "Menon Bearings Ltd (Branch -1- IGST)", "GatePass": "OM/GP/APR-20/10008", "ConRef": "OM/CON/APR-20/1012", "InvNo": "1", "TransporterDetails": "	TS09EA213123","IssueDate":"-", "CloseGP": "Update", "ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Menon Bearings Ltd (Branch 1 - CGST & SGST)", "GatePass": "OM/GP/APR-20/10007", "ConRef": "OM/CON/APR-20/1011", "InvNo": "1", "TransporterDetails": "Update","IssueDate":"-", "CloseGP": "Update","ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Minda Industries Ltd (Branch - 1 - IGST)", "GatePass": "OM/GP/APR-20/10006", "ConRef": "OM/CON/APR-20/1010", "InvNo": "1", "TransporterDetails": "Update","IssueDate":"-", "CloseGP": "Update","ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Minda Industries Ltd (Branch - 1 - IGST)", "GatePass": "OM/GP/APR-20/10005", "ConRef": "OM/CON/APR-20/1009", "InvNo": "1", "TransporterDetails": "Update","IssueDate":"-", "CloseGP": "Update","ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Rane Holdings Ltd (Branch-Third-CGST & SGST)", "GatePass": "OM/GP/APR-20/10004", "ConRef": "OM/CON/APR-20/1007", "InvNo": "2", "TransporterDetails": "TS05EA21312","IssueDate":"-", "CloseGP": "Update", "ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Rane Holdings Ltd (Branch - OEM -CGST & SGST)", "GatePass": "OM/GP/APR-20/10003", "ConRef": "OM/CON/APR-20/1004", "InvNo": "2", "TransporterDetails": "Update","IssueDate":"-", "CloseGP": "Update", "ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Minda Industries Ltd (Branch - 1 - IGST)", "GatePass": "OM/GP/APR-20/10002", "ConRef": "OM/CON/OCT-19/1002", "InvNo": "2", "TransporterDetails": "Update","IssueDate":"-", "CloseGP": "Update", "ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Usha International Ltd (Hyderabad - Ayyapa Scty)", "GatePass": "OM/GP/APR-20/10002", "ConRef": "OM/CON/APR-20/1002", "InvNo": "1", "TransporterDetails": "TS09EA1233","IssueDate":"-", "CloseGP": "Update", "ActivityLog": "View", "Status": "Pending"},
    { "Vendor": "Usha International Ltd (Hyderabad - Ayyapa Scty)", "GatePass": "OM/GP/APR-20/10001", "ConRef": "OM/CON/APR-20/1001", "InvNo": "1", "TransporterDetails": "Update","IssueDate":"-", "CloseGP": "Update", "ActivityLog": "View", "Status": "Pending"},
    
    
  ];


  // statusOptions = [
  //   { value: 1, name: 'Completed', colorCode: '#00ff0040' },
  //   { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
  //   { value: 3, name: 'In Process', colorCode: '#87CEFA' },
  //   { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
  // ];

  // updateNewLead(item:any) {
  //   console.log(item, 'item');
  //   delete item['meeting_time']
  //   if (item['potential'] == 0) {
  //     item['potential'] = 1;
  //     item["toolT"] = "Done";
  //   } else if (item['potential'] == 1) {
  //     item['potential'] = 2;
  //     item["toolT"] = "Pending";
  //   } else if (item['potential'] == 2) {
  //     item['potential'] = 3;
  //     item["toolT"] = "Partial";
  //   } else if (item['potential'] == 3) {
  //     item['potential'] = 4;
  //     item["toolT"] = "Declined";
  //   } else if (item['potential'] == 4) {
  //     item['potential'] = 1;
  //     item["toolT"] = "Done";
  //   }
  
  // }

  // public createstocktransferrequest() {
  //   let dialogRef = this.dialog.open(CreateStockTransferRequestDialogComponent, {
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  // public opencontactDialog1(item) {
  //   let dialogRef = this.dialog.open(EditStocktransferRequestComponent, {
  //     data: item,
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  // close(){
  //   this.dialog.close();
  // }

}