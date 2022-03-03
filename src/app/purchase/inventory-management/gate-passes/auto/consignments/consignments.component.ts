import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivityLogdialogueComponent } from './activity-logdialogue/activity-logdialogue.component';
import { InvoiceDetailsdialogueComponent } from './invoice-detailsdialogue/invoice-detailsdialogue.component';
import { TransporterDetailsdialogueComponent } from './transporter-detailsdialogue/transporter-detailsdialogue.component';


@Component({
  selector: 'app-consignments',
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.scss']
})
export class ConsignmentsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
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


  public transporterdetailsdialogue() {
    let dialogRef = this.dialog.open(TransporterDetailsdialogueComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public invoicedetailsdialogue() {
    let dialogRef = this.dialog.open(InvoiceDetailsdialogueComponent, {
     
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  public Activitylogdialogue() {
    let dialogRef = this.dialog.open(ActivityLogdialogueComponent, {
      height: 'auto',
      width: '700px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

   

}